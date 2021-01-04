import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';


class Customers extends Component {
    render() {
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

                                    {/* {{!-- Disabled for future deployment --}} */}
                                    {/* {{!-- < div className="level-item is-hidden-tablet-only">
            <div className="field has-addons">
                                    <p className="control">
                                        <input type="text" className="input" placeholder="Name, email...">
                </p>
                                        <p className="control">
                                            <button className="button">Search</button>
                                        </p>
            </div>
                                </div> --}} */}
                                </div>

                                {/* {{!-- Disabled for future deployment --}} */}
                                {/* {{!-- < div className="level-right">
        <p className="level-item"><strong>All</strong></p>
                            <p className="level-item"><a>With orders</a></p>
                            <p className="level-item"><a>Without orders</a></p>
    </div> --}} */}
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
                                            <tr>
                                                <td>
                                                    <strong>
                                                        {/* <p>{{ first_name }} {{ last_name }}</p> */}
                                                        <p>first_name last_name</p>
                                                    </strong>
                                                </td>
                                                <td><code>email</code></td>
                                                <td>address</td>
                                                <td>city</td>
                                                <td>state</td>
                                                <td>
                                                    <div className="buttons">
                                                        phone
                                                        {/* {{!-- Disabled for future deployment --}} */}
                                                        {/* {{!-- < a href="edit-customer.html" className="button is-small">Edit</a>
                                    <a className="button is-small">Delete</a> --}} */}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* {{!-- Disabled for future deployment --}} */}
                                    {/* {{!-- < nav className="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next</a>
                <ul className="pagination-list">
                    <li><a className="pagination-link is-current">1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link">45</a></li>
                    <li><a className="pagination-link">46</a></li>
                    <li><a className="pagination-link">47 </a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link">86</a></li>
                </ul>
    </nav> --}} */}
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