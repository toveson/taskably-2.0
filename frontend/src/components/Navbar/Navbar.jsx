import React, { Component } from 'react';
import taskablyLogo from '../../assets/taskably.png';

class Navbar extends Component {
    render() {
        return (

            <nav className='navbar has-shadow is-fixed-top'>

                <div className='navbar-brand'>
                    {/* <!-- Logo, tagline and navbar-burger --> */}
                    <a className='navbar-item' width="250" href="dashboard">
                        <img src={taskablyLogo}alt="taskably company logo" />
                    </a>
                    {/* <div className='navbar-burger burger'
                        onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
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
                                {/* {{ user }} */}
                                user

                            </div>
                            <div className='navbar-dropdown is-right'>
                                <a className="navbar-item" href="new-customer">
                                    <div>
                                        <span className='icon is-small'>
                                            <i className="fas fa-user-edit"></i>
                                        </span>
                                Create New Customer
                                    </div>
                                </a>
                                <a className="navbar-item" href="inventory">
                                    <div>
                                        <span className="icon is small">
                                            <i className='fa fa-book'></i>
                                        </span>
                                Inventory
                                    </div>
                                </a>
                                <a className="navbar-item" href='/'>
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

export default Navbar;