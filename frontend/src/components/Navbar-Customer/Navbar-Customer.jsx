import React from 'react';
import { Link } from 'react-router-dom';
import taskablyLogo from '../../assets/taskably.png';
import '../Navbar-Customer/Navbar-Customer.css';

const NavbarCustomer = () => {
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
    return (

        <nav className='navbar has-shadow is-fixed-top' id='navbar-customer'>

            <div className='navbar-brand'>
                {/* <!-- Logo, tagline and navbar-burger --> */}
                <Link className='navbar-item' width="250" to="/">
                    <img src={taskablyLogo} alt="taskably company logo" />
                </Link>
                <div className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarMenu'
                    onClick={toggleBurgerMenu}>
                    <span aria-hidden></span>
                    <span aria-hidden></span>
                    <span aria-hidden></span>
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
                            <Link className="navbar-item" to="/" onClick={toggleBurgerMenu}>
                                <div>
                                    <span className="icon is-small">
                                        <i className="fa fa-sign-out"></i>
                                    </span>
                                Sign Out
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    );
};


export default NavbarCustomer;