import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import API from '../util/api.js';

// Route components
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard.jsx';
import Inventory from './Inventory/Inventory';
import Techs from './Techs/Techs';
import Customers from './Customers/Customers';
import Orders from './Orders/Orders';
import NewCustomer from './New-Customer/NewCustomer';
import NewTech from './New-Tech/NewTech';
import CustomerPortal from './CustomerPortal/Customer-Portal';
import NewWO from './New-WorkOrder/NewWorkOrder';



class App extends Component {
    componentDidMount() {
        API.getUserJWT(localStorage.getItem('JWT')).then(response => {
            console.log('response:', response);
        });
    }

    render() {
        // console.log('this.props: ', this.props);


        return (


            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path='/customer-portal' component={CustomerPortal} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/inventory' component={Inventory} />
                    <Route path='/customers' component={Customers} />
                    <Route path='/new-customer' component={NewCustomer} />
                    <Route path='/techs' component={Techs} />
                    <Route path='/new-tech' component={NewTech} />
                    <Route path='/orders' component={Orders} />
                    <Route path='/new-workorder' component={NewWO} />
                </div>
            </BrowserRouter>

        // token inside ()
        // after route
        // , getUserJWT: (token) => axios.get('/api/login', {headers: { authorization: localStorage.getItem('JWT'); }})

        );
    }
}



export default App;