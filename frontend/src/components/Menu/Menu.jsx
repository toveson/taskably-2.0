import React, { Component } from 'react';
import CustomersIcon from '../../assets/customers-icon.png';
import TechsIcon4 from '../../assets/techs-icon4.png';

const inlineStyle = {
    fontSize: 25
};
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
                                <span className="icon is-small">
                                    {/* <i className="fa fa-address-book"></i> */}
                                    <img src={CustomersIcon} />
                                    {/* <i src={CustomersIcon}></i> */}
                                </span>
                            Customers
                            </a>
                        </li>
                        {/* {{!-- Technicians menu link --}} */}
                        <li>
                            <a href="techs" >
                                <span className="icon is-smaller">
                                    <img src={TechsIcon4} />
                                    {/* <i className="fa fa-hard-hat"></i> */}
                                </span>
                                <span style={inlineStyle}>
                                    Technicians
                                </span>
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