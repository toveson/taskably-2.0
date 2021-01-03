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

class App extends Component {
    render() {
        console.log('this.props: ', this.props);

        API.getCustomers().then(response => {
            console.log('response:', response);
        });

        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/inventory' component={Inventory} />
                    <Route path='/customers' component={Customers} />
                    <Route path='/new-customer' component={NewCustomer} />
                    <Route path='/techs' component={Techs} />
                    <Route path='/orders' component={Orders} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;