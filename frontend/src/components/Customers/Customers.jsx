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
            data: [],
            currentPage: 1,
            customersPerPage: 15
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
            console.log('customers:', response.data);
            this.setState({ data: response.data });
            // this.setState({ customers: currentCustomers });
        });
    }

    render() {
        const { data, currentPage, customersPerPage } = this.state;

        // Logic for displaying current customers
        const indexOfLastCustomer = currentPage * customersPerPage;
        const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
        const currentCustomers = data.slice(indexOfFirstCustomer, indexOfLastCustomer);

        console.log(currentCustomers);
        console.log(indexOfFirstCustomer);
        console.log(indexOfLastCustomer);



        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / customersPerPage); i++) {
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

        {/* const renderCustomers = currentCustomers.map((data, index) => {
                                                     return <li key={data.cust_id} >{customer}</li>;
                                                 }); */}
        // {
        //     this.state.data.map((custData, index) => (
        //         <tr key={index} value={this.state.value}>
        //             <td>
        //                 <strong>
        //                     <p>{custData.customer}</p>
        //                 </strong>
        //             </td>
        //             <td><code>{custData.email}</code></td>
        //             <td>{custData.address}</td>
        //             <td>{custData.city}</td>
        //             <td>{custData.state}</td>
        //             <td>
        //                 <div className="button">
        //                     {custData.phone}
        //                 </div>
        //             </td>
        //         </tr>
        //     ))
        // }

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
                                            {/* const renderCustomers = currentCustomers.map((data, index) => {
                                                     return <li key={data.cust_id} >{customer}</li>;
                                                 }); */}


                                            {
                                                this.state.data.slice(indexOfFirstCustomer, indexOfLastCustomer).map((custData, index) => (
                                                    <tr key={index} value={this.state.value}>
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
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                    <div>
                                        <ul id='page-numbers'>
                                            test
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

