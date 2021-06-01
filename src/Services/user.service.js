import config from 'config';
import { authHeader, handleResponse } from '@/Helpers';
import { authenticationService } from '@/Services'

export const userService = {
    getUser,
    createUser,
    updateUser,
    fileSubmission
};

function fileSubmission (file)  {
    const formData = new FormData();
    console.log(file)
    formData.append('File', file);
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${currentUser.token}`
        },
    }
    fetch(`${config.apiUrl}/user/avatar`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

function getUser() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/user`, requestOptions).then(handleResponse);
}

function createUser(first_name, last_name, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
        })
    };

    return fetch(`${config.apiUrl}/registrations`, requestOptions)
        .then(user => {
            return user;
        });
}
function updateUser(first_name, last_name, sencond_last_name, married_last_name, marital_status, date_of_birth, nationality, place_of_birth, city_of_residence, zip_code, phone, mobile_phone, ocupation) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            sencond_last_name: sencond_last_name,
            married_last_name: married_last_name,
            marital_status: marital_status,
            date_of_birth: date_of_birth,
            nationality: nationality,
            place_of_birth: place_of_birth,
            city_of_residence: city_of_residence,
            zip_code: zip_code,
            // email: email,
            phone: phone,
            mobile_phone: mobile_phone,
            ocupation: ocupation
        })
    };

    return fetch(`${config.apiUrl}/user/update`, requestOptions)
        .then(user => {
            console.log(user);
            return user;
        });
}
