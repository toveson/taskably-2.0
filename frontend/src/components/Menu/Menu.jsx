import React, { Component } from 'react';
import TechsIcon4 from '../../assets/techs-icon4.png';
import CustomersIcon from '../../assets/customers-icon.png';
import OrdersIcon from '../../assets/orders-icon.png';
import InventoryIcon from '../../assets/inventory-icon.png';
import DashboardIcon from '../../assets/dashboard-icon.png';

const inlineStyle = {
    fontSize: 25
};
class Menu extends Component {
    render() {
        return (
            // Research how to have 'is-active' change when going through menu
            <div className='column is-4-tablet is-3-desktop is-2-widescreen'>
                <nav className='menu'>
                    <p className='menu-label'>Menu</p>
                    <ul className='menu-list'>
                        {/* {{!-- Dashboard menu link --}} */}
                        <li>
                            {/* <a className='is-active' href='index'> */}
                            <a className='' href='dashboard'>
                                <span className='icon is-smaller'>
                                    {/* <i className='fa fa-tachometer'></i> */}
                                    <img src={DashboardIcon} />
                                </span>
                                <span style={inlineStyle}>
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        {/* {{!-- Inventory menu link --}} */}
                        <li>
                            <a href='inventory'>
                                <span className='icon is-smaller'>
                                    {/* <i className='fa fa-book'></i> */}
                                    <img src={InventoryIcon} />
                                </span>
                                <span style={inlineStyle}>
                                    Inventory
                                </span>
                            </a>
                        </li>
                        {/* {{!-- Customers menu link --}} */}
                        <li>
                            <a href='customers'>
                                <span className='icon is-smaller'>
                                    {/* <i className='fa fa-address-book'></i> */}
                                    <img src={CustomersIcon} />
                                    {/* <i src={CustomersIcon}></i> */}
                                </span>
                                <span style={inlineStyle}>
                                    Customers
                                </span>
                            </a>
                        </li>
                        {/* {{!-- Technicians menu link --}} */}
                        <li>
                            <a href='techs' >
                                <span className='icon is-smaller'>
                                    <img src={TechsIcon4} />
                                    {/* <i className='fa fa-hard-hat'></i> */}
                                </span>
                                <span style={inlineStyle}>
                                    Technicians
                                </span>
                            </a>
                        </li>
                        {/* {{!-- Orders menu link --}} */}
                        <li>
                            <a href='orders'>
                                <span className='icon is-smaller'>
                                    <img src={OrdersIcon} />
                                    {/* <i className='fa fa-clipboard-list'></i> */}
                                </span>
                                <span style={inlineStyle}>
                                    Orders
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


        );
    }
}

export default Menu;