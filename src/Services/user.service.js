import config from 'config';
import { authHeader, handleResponse } from '@/Helpers';

export const userService = {
    getAll,
    createUser
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function createUser(first_name, last_name, email, password) { 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
                first_name: first_name,
                last_name: last_name,
                email: email, 
                password: password
        })
    };

    return fetch( `${config.apiUrl}/registrations`, requestOptions)
            .then(user => {
                return user;
            });
}