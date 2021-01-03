import axios from 'axios';

const api = {
    test: () => axios.get('/test')
    , getCustomers: () => axios.get('/api/customers/')
    , getStatsWO: () => axios.get('/api/stats/getcountWO')
};

export default api;