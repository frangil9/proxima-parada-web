import axios from 'axios';

export const createPublications = (data) => {
    return axios({
        method: 'post', 
        url: 'http://localhost:3001/api/publications',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      });
}; 

export const findAllPublications = () => {
    return axios.get('http://localhost:3001/api/publications');
};

export const findPublicationById = (id) => {
    return axios.get(`http://localhost:3001/api/publications/${id}`);
};