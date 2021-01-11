import React, { Component } from 'react';
// import StarRating from 'react-star-rating';
// import Rating from '../Rating/Rating';

class CustomerPortal extends Component {
    // handler in react class
    handleRatingClick(e, data) {
        alert('You left a ' + data.rating + ' star rating for ' + data.caption);
    }

    // this.handleRatingClick.bind(this, pass, args, here)


    render() {



        return (
            <section className='hero is-success is-fullheight has-shadow'>
                <div className='hero-body'>
                    <div className='container'>
                        <div className='columns is-centered'>
                            <div className='column is-10-tablet is-10-desktop is-8-widescreen' id='portal'>
                                Customer Portal
                                <div>Thank you for choosing Taskably! </div>
                                <br />
                                <div> Your Appointment is:</div>
                                <br />
                                <div> To chat with one of our representatives click here: <strong>Chat</strong></div>
                                <br />
                                <div> Please click here to submit a Review</div>
                                <div>
                                    {/* <Rating />
                                     */}
                                    {/* <form target="_self" method="GET">
                                        <StarRating name="react-star-rating" caption="Rate your service!" ratingAmount={5} />
                                        <button type="submit" className="btn btn-primary">Submit Rating</button>
                                    </form> */}
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