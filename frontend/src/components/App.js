import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Route components
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard.jsx';
import Inventory from './Inventory/Inventory';
import Techs from './Techs/Techs';
import Customers from './Customers/Customers';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/inventory' component={Inventory} />
                    <Route path='/customers' component={Customers} />
                    <Route path='/techs' component={Techs} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;