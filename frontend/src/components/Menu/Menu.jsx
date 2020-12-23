import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            // Research how to have 'is-active' change when going through menu
            <div className="column is-4-tablet is-3-desktop is-2-widescreen">
                <nav className="menu">
                    <p className="menu-label">Menu</p>
                    <ul className="menu-list">
                        {/* {{!-- Dashboard menu link --}} */}
                        <li>
                            {/* <a className='is-active' href="index"> */}
                            <a className='' href="index">
                                <span className="icon">
                                    <i className="fa fa-tachometer"></i>
                                </span>
                            Dashboard
                            </a>
                        </li>
                        {/* {{!-- Inventory menu link --}} */}
                        <li>
                            <a href="inventory">
                                <span className="icon">
                                    <i className="fa fa-book"></i>
                                </span>
                            Inventory
                            </a>
                        </li>
                        {/* {{!-- Customers menu link --}} */}
                        <li>
                            <a href="customers">
                                <span className="icon">
                                    <i className="fa fa-address-book"></i>
                                </span>
                            Customers
                            </a>
                        </li>
                        {/* {{!-- Technicians menu link --}} */}
                        <li>
                            <a href="techs">
                                <span className="icon">
                                    {/* <i className="fas fa-hard-hat"></i> */}
                                    <i className="fa fa-hard-hat"></i>
                                </span>
                            Technicians
                            </a>
                        </li>
                        {/* {{!-- Orders menu link --}} */}
                        <li>
                            <a href="orders">
                                <span className="icon">
                                    <i className="fa fa-clipboard-list"></i>
                                </span>
                            Orders
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


        );
    }
}

export default Menu;