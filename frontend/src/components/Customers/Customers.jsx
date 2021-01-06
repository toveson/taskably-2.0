import React, { Component } from 'react';
// import { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import API from '../../util/api';
// import Pagination from '../Pagination/Pagination';




class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            currentPage: 1,
            customersPerPage: 20
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        API.getCustomers().then(response => {
            // console.log('customers:', response.data);
            this.setState({ customers: response.data });
        });
    }


    render() {
        const { customers, currentPage, customersPerPage } = this.state;

        // Logic for displaying current customers
        const indexOfLastCustomer = currentPage * customersPerPage;
        const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
        const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

        // const renderCustomers = currentCustomers.map((customers, index) => {
        //     return <li key={customers.cust_id} >{customer}</li>;
        // });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(customers.length / customersPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });



        return (
            <div>
                <Navbar />
                <section className="section">
                    <div className="columns">
                        <Menu />

                        <div className="column">
                            <h1 className="title" id='customers-H1'>Customers</h1>


                            <nav className="level">
                                <div className="level-left">
                                    <p className="level-item">
                                        <a className="button is-success is-focus" id='buttonCustomerCreate' href="new-customer">
                                            <span className='icon is-small'>
                                                <i className="fas fa-user-edit"> </i>
                                            </span>
                                            <span>Create New Customer</span>
                                        </a>
                                    </p>
                                </div>
                            </nav>
                            <div>
                                <div className="table-container">
                                    <table className="table is-hoverable is-fullwidth">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Phone Number</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Phone Number</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {this.state.customers.map(custData => (
                                                <tr key={custData.cust_id}>
                                                    <td>
                                                        <strong>
                                                            <p>{custData.customer}</p>
                                                        </strong>
                                                    </td>
                                                    <td><code>{custData.email}</code></td>
                                                    <td>{custData.address}</td>
                                                    <td>{custData.city}</td>
                                                    <td>{custData.state}</td>
                                                    <td>
                                                        <div className="button">
                                                            {custData.phone}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div>
                                        <ul id='page-numbers'>
                                            {renderPageNumbers}
                                        </ul>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div>
                </section >
            </div >

        );
    }
}

export default Customers;