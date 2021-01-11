import React, { Component } from 'react';
import Video1 from '../../assets/video/world-wire.mp4';

class Homepage extends Component {
    render() {
        return (
            <div>
                <section>
                    <header className='homepage-header'>
                        <h1 className='homepage-logo'>Taskably</h1>
                        <div className='homepage-toggle'></div>
                    </header>

                    <div className="fullscreen-video-wrap video-container " >
                        <video src={Video1} autoPlay="true" loop="true" muted > </video>
                    </div>

                    <div className='overlay'></div>

                    <div className='homepage-text is-transparent'>
                        <h2>Your Way</h2>
                        <h3>of doing things</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, repudiandae?</p>
                        <a href='#' >Explore</a>
                    </div>


                    <ul className='social'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </section>

                <div>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Homepage;