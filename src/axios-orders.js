import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-pizza-builder-40b76.firebaseio.com/'
});

export default instance;