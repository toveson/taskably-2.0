import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';

class Login extends Component {
    render() {
        return (
            <section className='hero is-success is-fullheight has-shadow'>
                <div className='hero-body'>
                    <div className='container'>
                        <div className='columns is-centered'>
                            <div className='column is-8-tablet is-4-desktop is-3-widescreen'>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;