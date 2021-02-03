import config from 'config';
import { handleResponse } from '@/Helpers';

export const topicService = {
    getTopics,
    getSingleTopic
};

function getTopics() {
    const requestOptions = { method: 'GET' };
    return fetch(`${config.apiUrl}/topics`, requestOptions)
    .then(handleResponse)
    .then(topics => {
        return topics.results
    });
}

function getSingleTopic(id) {
    const requestOptions = { method: 'GET' };
    return fetch(`${config.apiUrl}/topics/${id}`, requestOptions)
    .then(handleResponse)
    .then(topics => {
        return topics.results
    });
}