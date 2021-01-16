import React, { Component } from 'react';
import Video2 from '../../assets/video/technician.mp4';
import Logo from '../../assets/taskably.png';
import NavbarCustomer from '../Navbar-Customer/Navbar-Customer';

import '../../index.css';
import SocketIo from '../Sockets/Sockets';
class CustomerPortal extends Component {


    render() {



        return (
            <section className='hero is-success  has-shadow'>
                <div className='fullscreen-video-wrap video-container ' >
                    <video src={Video2} autoPlay='true' loop='true' muted > </video>
                </div>
                <NavbarCustomer />
                <div className='hero-body'>
                    <div className='container column is-7 is-offset-5' >
                        <img className='container image' src={Logo} alt='taskably company logo' width='1100px' />
                    </div>
                    <div className='container' >
                        <div className='columns is-centered'>
                            <div className='column is-4-tablet is-4-desktop is-4-widescreen is-offset-7' id='portal'>
                                <h2 id='Customer-Portal-Heading'><u>Customer Portal</u></h2>
                                <div>Thank you for choosing Taskably! </div>
                                <br />
                                <div> Your Appointment is on:</div>
                                <strong>10/31/20 at 2:30 PM</strong>
                                <br />
                                <br />
                                <div> Chat with one of our representatives below: </div>

                                <div>
                                    <SocketIo></SocketIo>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default CustomerPortal;