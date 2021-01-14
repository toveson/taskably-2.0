import React, { Component } from 'react';
// import Logo from './../../assets/taskably.png';
import api from '../../util/api';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    submitPassword = (e) => {
        e.preventDefault();
        console.log(this.state);
        api.userLogin(this.state)
            .then(res => localStorage.setItem('JWT', res.data.accessToken) );
    }

    render() {
        return (
            <div>
                <form className='box' id='login-form'>
                    {/* <div className='field has-text-center'>
                        <img src={Logo} alt="taskably company logo" width='167' />
                    </div> */}

                    <div className='field'>
                        <label className='label ' id='login-form'>Email</label>
                        <div className='control has-icons-left'>
                            <input className='input' type='email' placeholder='example@email.com' required
                                value={this.state.email}
                                onChange={ (e) => this.setState({email: e.target.value})} />
                            <span className='icon is-small is-left'>
                                <i className='fa fa-envelope'></i>
                            </span>
                        </div>
                    </div>

                    <div className='field'>
                        <label className='label ' id='login-form'>Password</label>
                        <div className='control has-icons-left'>
                            <input className='input' type='password' placeholder='*********' required
                                value={this.state.password }
                                onChange={ (e) => this.setState({password: e.target.value})}
                            />
                            <span className='icon is-small is-left'>
                                <i className='fa fa-lock'></i>
                            </span>
                        </div>
                    </div>

                    <div className='field '>
                        <label className='checkbox '>
                            <input type='checkbox' />
                        Remember me
                        </label>
                    </div>

                    <div className='field'>
                        <button onClick={this.submitPassword} className='button is-success is-dark is-fullwidth' type='submit' id='login-button'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;