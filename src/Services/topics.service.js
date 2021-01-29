import config from 'config';
import { authHeader } from '@/Helpers';

export const topicService = {
    getTopics
};

function getTopics() {
    const requestOptions = { method: 'GET', headers: authHeader(), mode: 'no-cors' };
    return fetch(`${config.apiUrl}/topics`, requestOptions)
    .then(response => response.json())
    .then(topics => {
        return topics;
    });
}

