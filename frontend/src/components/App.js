import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Route components
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard.jsx';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;