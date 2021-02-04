import config from 'config'
import { handleResponse } from '@/Helpers'
import { authenticationService } from '@/Services'

export const bookingService = {
    createBooking
};

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

    return fetch( `${config.apiUrl}/bookings`, requestOptions)   
    .then(handleResponse)
    .then(booking =>{
        return booking;
    });
}