import axios from 'axios';

const api = {
    getCustomers: () => axios.get('/api/customers/')
    , postNewCust: () => axios.post('/api/customers/new-customer')
    , getStatsWO: () => axios.get('/api/stats/getcountWO')
    , getStatsRsn: () => axios.get('./api/stats/getcountRsn')
    , getStatsInv: () => axios.get('./api/stats/getTotInv')
    , getInv: () => axios.get('./api/inventory/getinv')
    , getTechs: () => axios.get('./api/techs/')
    , postNewTech: () => axios.post('/api/techs/new-tech')
};

export default api;