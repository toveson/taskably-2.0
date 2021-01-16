import React, { Component } from 'react';
import LoginForm from '../Login/LoginForm';
import Video1 from '../../assets/video/world-wire.mp4';
import Logo from '../../assets/taskably.png';
import PropTypes from 'prop-types';

import '../../index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <div>
                <section>
                    {/* <header className='homepage-header'>
                        <div className='homepage-toggle'></div>
                        <h1 className='homepage-logo'>Taskably</h1>
                    </header> */}

                    <div className='fullscreen-video-wrap video-container ' >
                        <video src={Video1} autoPlay='true' loop='true' muted > </video>
                    </div>

                    <div className='overlay'></div>

                    <div className='hero-body'>
                        <div className='logo-container' >
                            {/* <div className='container column is-7 is-offset-4' > */}
                            <img className='container image' src={Logo} alt='taskably company logo' width='1100px' />
                            {/* <img className='container image' src={Logo} alt='taskably company logo' width='1100px' /> */}
                        </div>

                        <div className='homepage-text'>
                            {/* <div className='container has-text-centered homepage-text'> */}
                            <div className='homepage-subtitle'>
                                {/* <div className='column is-3-tablet is-5-desktop is-6-widescreen is-offset-6'> */}
                                {/* <img src={Logo} alt='Logo' height='50' className='column is 8 ' id='logo' /> */}
                                <h2 className='title'>
                                    YOUR WAY
                                </h2>
                                <h3 className='homepage-subtitle-subtitle'>
                                    of doing things.
                                </h3>
                                {/* <a className='button is-info ' href='contact'>
                                Contact Me
                            </a> */}
                            </div>
                        </div>
                        <div className='login-container'>
                            <div className='login-form-container'>
                                {/* <div className='column is-5-tablet is-6-widescreen is-5-desktop is-offset-6 '> */}
                                <LoginForm />
                            </div>
                        </div>
                    </div>


                    {/* <div className='homepage-text is-transparent'>
                        <h2>Your Way</h2>
                        <h3>of doing things</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, repudiandae?</p>
                        <a href='#' >Explore</a>
                    </div>


                    <ul className='social'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>*/}
                </section>

                {/* <div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>  */}
            </div >
        );
    }
}

LoginForm.propTypes = {
    getJWT: PropTypes.any
};
// export default Homepage;
export default Login;