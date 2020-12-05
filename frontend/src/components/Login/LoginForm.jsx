import React, { Component } from 'react';
import Logo from './../../assets/taskably.png';

class LoginForm extends Component {
    render() {
        return (
            <form className='box'>
                <div className='field has-text-centered'>
                    <img src={Logo} alt="taskably company logo" width='167'/>
                </div>

                <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control has-icons-left'>
                        <input className='input' type='email' placeholder='example@email.com' required />
                        <span className='icon is-small is-left'>
                            <i className='fa fa-envelope'></i>
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Password</label>
                    <div className='control has-icons-left'>
                        <input className='input' type='password' placeholder='*********' required />
                        <span className='icon is-small is-left'>
                            <i className='fa fa-lock'></i>
                        </span>
                    </div>
                </div>

                <div className='field'>
                    <label className='checkbox'>
                        <input type='checkbox' />
                        Remember me
                    </label>
                </div>

                <div className='field'>
                    <button className='button is-success is-dark' type='submit'>
                        Login
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm;