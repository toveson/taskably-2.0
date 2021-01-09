import axios from 'axios';

const api = {
    getCustomers: () => axios.get('/api/customers/')
    , postNewCust: (data) => axios.post('/api/customers/new-customer', data)

    , getStatsWO: () => axios.get('/api/stats/getcountWO')
    , getStatsRsn: () => axios.get('./api/stats/getcountRsn')
    , getStatsInv: () => axios.get('./api/stats/getTotInv')

    , getInv: () => axios.get('./api/inventory/')

    , getTechs: () => axios.get('./api/techs/')
    , postNewTech: (data) => axios.post('/api/techs/new-tech', data)

    , getWorkorders: () => axios.get('./api/workorders/')

    , getRegion: () => axios.get('./api/lookup/region')
    , getProducts: () => axios.get('./api/lookup/products')
    , getReason: () => axios.get('./api/lookup/reason')
    , getRoles: () => axios.get('./api/lookup/roles')
    , getStatus: () => axios.get('./api/lookup/status')
    , getState: () => axios.get('./api/lookup/state')
};

export default api;