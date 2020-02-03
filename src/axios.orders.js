import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1abec.firebaseio.com/'
});

export default instance;