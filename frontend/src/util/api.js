import axios from 'axios';

const api = {
    getCustomers: () => axios.get('/api/customers/')
    , postNewCust: (data) => axios.post('/api/customers/new-customer', data)
    , getStatsWO: () => axios.get('/api/stats/getcountWO')
    , getStatsRsn: () => axios.get('./api/stats/getcountRsn')
    , getStatsInv: () => axios.get('./api/stats/getTotInv')
    , getInv: () => axios.get('./api/inventory/getinv')
    , getTechs: () => axios.get('./api/techs/')
    , postNewTech: (data) => axios.post('/api/techs/new-tech', data)
    , getWorkorders: () => axios.get('./api/workorders/')
};

export default api;