import React from 'react';
import taskablyLogo from '../../assets/taskably.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
    return (

        <nav className='navbar has-shadow is-fixed-top'>
            {/* <div className='container' id='navbar-background'> */}
            <div className='navbar-brand'>
                {/* <!-- Logo, tagline and navbar-burger --> */}
                <Link className='navbar-item' width="250" to="dashboard">
                    <img src={taskablyLogo} alt="taskably company logo" />
                </Link>

                <span className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarMenu'
                    onClick={toggleBurgerMenu}>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </span>
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
                    <div className='navbar-item has-dropdown is-hoverable' id='navbar-item-dashboard'>
                        <div className='navbar-link'>
                            {/* <!-- User name --> */}
                                Trever

                        </div>
                        <div className='navbar-dropdown is-right'>
                            <Link className="navbar-item" to="new-customer" onClick={toggleBurgerMenu}>
                                <div>
                                    <span className='icon is-small'>
                                        <i className="fas fa-user-edit"></i>
                                    </span>
                                Create New Customer
                                </div>
                            </Link>
                            <Link className="navbar-item" to="inventory" onClick={toggleBurgerMenu}>
                                <div>
                                    <span className="icon is small">
                                        <i className='fa fa-book'></i>
                                    </span>
                                Inventory
                                </div>
                            </Link>
                            <Link className="navbar-item" to='/' onClick={toggleBurgerMenu}>
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
        </nav >


    );
};
// }

export default Navbar;