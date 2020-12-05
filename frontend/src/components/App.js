import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Route components
import Login from './Login/Login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Login} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;