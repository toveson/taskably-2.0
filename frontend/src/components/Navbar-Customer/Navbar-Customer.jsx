import React, { Component } from 'react';
import taskablyLogo from '../../assets/taskably.png';
import '../Navbar-Customer/Navbar-Customer.css';

class NavbarCustomer extends Component {
    render() {
        return (

            <nav className='navbar has-shadow is-fixed-top' id='navbar-customer'>

                <div className='navbar-brand'>
                    {/* <!-- Logo, tagline and navbar-burger --> */}
                    <a className='navbar-item' width="250" href="dashboard">
                        <img src={taskablyLogo}alt="taskably company logo" />
                    </a>
                    <div className='navbar-burger burger' >
                        <span></span>
                    </div>
                </div>

                <div className='navbar-menu'>
                    {/* <!-- User name, dropdown menu --> */}
                    <div className='navbar-start'>
                        <div className='navbar-item'>
                            <div>
                                {/* <!-- motto --> */}
                                <h3 className="is-italic">Your Way Of Doing Things</h3>
                            </div>
                        </div>
                    </div>

                    <div className='navbar-end'>
                        <div className='navbar-item has-dropdown is-hoverable'>
                            <div className='navbar-link'>
                                {/* <!-- User name --> */}
                                {/* {{!-- Username/Email needs to pull --}} */}
                                <strong id='customer-portal-hello'>Hello</strong> <strong id='customer-portal-name'><u>  Baxy</u></strong>
                            </div>
                            <div className='navbar-dropdown is-right'>
                                <a className="navbar-item" href="/">
                                    <div>
                                        <span className="icon is-small">
                                            <i className="fa fa-sign-out"></i>
                                        </span>
                                Sign Out
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        );
    }
}

export default NavbarCustomer;