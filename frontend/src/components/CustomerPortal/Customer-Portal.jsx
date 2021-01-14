import React, { Component } from 'react';
import Video2 from '../../assets/video/technician.mp4';

import '../../index.css';
class CustomerPortal extends Component {


    render() {



        return (
            <section className='hero is-success  has-shadow'>
                <div className='fullscreen-video-wrap video-container ' >
                    <video src={Video2} autoPlay='true' loop='true' muted > </video>
                </div>
                <div className='hero-body'>
                    <div className='container' >
                        <div className='columns is-centered'>
                            <div className='column is-4-tablet is-4-desktop is-4-widescreen is-offset-7' id='portal'>
                                Customer Portal
                                <div>Thank you for choosing Taskably! </div>
                                <br />
                                <div> Your Appointment is:</div>
                                <br />
                                <div> To chat with one of our representatives click here: <strong>Chat</strong></div>
                                <br />
                                <div> Please click here to submit a Review</div>
                                <div>
                                    {/* <Rating /> */}

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