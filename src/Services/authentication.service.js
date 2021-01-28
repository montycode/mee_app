import { BehaviorSubject } from 'rxjs'

import config from 'config'
import { handleLogin } from '@/Helpers'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch( `${config.apiUrl}/authenticate`, requestOptions)
    .then(handleLogin)
    .then(token => {
      let auth_token = token.auth_token;
      const requestUserOptions = { 
          method: 'GET', 
          headers: { Authorization: `Bearer ${auth_token}` }
      }
      return fetch(`${config.apiUrl}/user`, requestUserOptions)
        .then(handleLogin)
        .then(user => {
        user.token = token.auth_token;
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);

        return user;
    })
  })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}