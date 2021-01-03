import axios from 'axios';

const api = {
    test: () => axios.get('/test')
    , getCustomers: () => axios.get('/api/customers/')

};

export default api;