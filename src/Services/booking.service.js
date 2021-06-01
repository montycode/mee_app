import config from 'config'
import { handleResponse } from '@/Helpers'
import { authenticationService } from '@/Services'
import moment from 'moment';

export const bookingService = {
    createBooking,
    getBookings,
    getSingleBooking,
    updateBooking,
    updateBookingBrief
};

// export let booking_id;
// export let booking_data;
function updateBooking(topic_id, start, duration) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({
            topic_id: topic_id,
            start: start,
            duration: duration
        })
    };
    return fetch(`${config.apiUrl}/bookings/update`, requestOptions)
        .then(handleResponse)
        .then(booking => {
            // booking_data = booking.result;
            // booking_id = booking.result.id;
            
            console.log("Returned date in service: " + moment(booking.result.start).format('YYYY-MM-DD HH:mm:ss z'));
            // console.log(booking);
            return booking;
        });
}
function updateBookingBrief(id, brief) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({
            // id: id,
            brief: brief
        })
    };
    return fetch(`${config.apiUrl}/bookings/${id}`, requestOptions)
        .then(handleResponse)
        .then(booking => {
            // booking_data = booking.result;
            // booking_id = booking.result.id;
            
            // console.log(booking);
            return booking;
        });
}
function createBooking(topic_id, start, duration) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({
            topic_id: topic_id,
            start: start,
            duration: duration
        })
    };

    return fetch(`${config.apiUrl}/bookings`, requestOptions)
        .then(handleResponse)
        .then(booking => {
            // booking_data = booking.result;
            // booking_id = booking.result.id;
            
            console.log("Returned date in service: " + moment(booking.result.start).format('YYYY-MM-DD HH:mm:ss z'));
            // console.log(booking);
            return booking;
        });
}
function getBookings() {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
    };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
        .then(handleResponse)
        .then(Bookings => {
            // console.log(Bookings.result);
            return Bookings.result
        });
}

function getSingleBooking(id) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
    };
    return fetch(`${config.apiUrl}/bookings/${id}`, requestOptions)
        .then(handleResponse)
        .then(booking => {
            console.log(booking.results)
            return booking.results
        });
}