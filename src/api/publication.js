import axios from 'axios';
import {API_URL} from '../utils/config';

export const createPublication = (data) => {
    return axios({
        method: 'post', 
        url: `${API_URL}/api/publications`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      });
}; 

export const updatePublication = (id, data) => {
    return axios({
        method: 'put', 
        url: `${API_URL}/api/publications/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      });
};

export const findAllPublications = () => {
    return axios.get(`${API_URL}/api/publications`);
};

export const findPublicationById = (id) => {
    return axios.get(`${API_URL}/api/publications/${id}`);
};

export const deletePublication = (id) => {
    return axios.delete(`${API_URL}/api/publications/${id}`);
};