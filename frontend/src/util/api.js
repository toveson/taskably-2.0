import axios from 'axios';
// import { route } from '../../../backend/routes/login';

const api = {
    getCustomers: () => axios.get('/api/customers/')
    , postNewCust: (data) => axios.post('/api/customers/new-customer', data)

    , getStatsWO: () => axios.get('/api/stats/getcountWO')
    , getStatsRsn: () => axios.get('/api/stats/getcountRsn')
    , getStatsInv: () => axios.get('/api/stats/getTotInv')

    , getInv: () => axios.get('/api/inventory/')
    , getInvInstalled: () => axios.get('/api/inventory/inv-installed')

    , getTechs: () => axios.get('/api/techs/')
    , postNewTech: (data) => axios.post('/api/techs/new-tech', data)

    , getWorkorders: () => axios.get('./api/workorders/')
    , postNewWO: (data) => axios.post('./api/workorders/new-wo', data)
    , updateWO: (data) => axios.put('./api/workorders/upd-wo/:' + data.woid, data)

    , getRegion: () => axios.get('/api/lookup/region')
    , getProducts: () => axios.get('/api/lookup/products')
    , getReason: () => axios.get('/api/lookup/reason')
    , getRoles: () => axios.get('/api/lookup/roles')
    , getStatus: () => axios.get('/api/lookup/status')
    , getStates: () => axios.get('/api/lookup/state')

    , getUsers: () => axios.get('/api/users')
    , getUserJWT: (token) => axios.get('/api/login', {headers: { authorization: token }})
    , userLogin: (data) => axios.post('/api/login', data)

    , getReviews: () => axios.get('/api/reviews')
    , postNewReview: (data) => axios.post('/api/reviews/new-review', data)

};

// token inside ()
// after route
// , {headers: { authorization: localStorage.getItem('JWT'); }}
export default api;