import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import API from '../../util/api';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderData: [],
            currentPage: 1,
            ordersPerPage: 15
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        API.getWorkorders().then(response => {
            console.log('order:', response.data);
            this.setState({ orderData: response.data });
        });
    }

    render() {
        const { orderData, currentPage, ordersPerPage } = this.state;

        // Logic for displaying current orders
        const indexOfLastOrder = currentPage * ordersPerPage;
        const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
        // const currentOrders = orderData.slice(indexOfFirstOrder, indexOfLastOrder);

        console.log(orderData);
        // console.log(currentOrders);
        console.log(indexOfFirstOrder);
        console.log(indexOfLastOrder);



        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(orderData.length / ordersPerPage); i++) {
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
                            <h1 className="title" id='orders-H1'>Work Orders</h1>

                            <nav className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <p className="subtitle is-5" id='Orders-orders'><strong id='Orders-count'> countWO</strong> Total </p>
                                    </div>
                                    <div className="level-item is-hidden-tablet-only">
                                        {/* {{!-- Disabled for future deployment --}} */}
                                        {/* {{!-- < div className="field has-addons">
                                            <p>
                                            <input type="text" className="input" placeholder="Order#, customer...">
                                            </p>
                                            <p className="control">
                                                <button className="button">Search</button>
                                            </p>
                                        </div> --}} */}
                                    </div>
                                </div>

                                {/* {{!-- Disabled for future deployment --}} */}
                                {/* {{!-- < div className="level-right">
                  <p className="level-item"><strong>All</strong></p>
                                <p className="level-item"><a>In progress</a></p>
                                <p className="level-item"><a>Successful</a></p>
                                <p className="level-item"><a>Failed</a></p>
        </div> --}} */}
                            </nav>

                            <div className="table-container">
                                <table className="table is-hoverable is-fullwidth">
                                    <thead className='theader'>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Region</th>
                                            <th>Technician</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Products</th>
                                            <th>Status</th>
                                            <th>Reason</th>
                                            <th>Appt. Date</th>
                                            <th>Appt. Time</th>
                                            <th>Customer</th>
                                            <th>Cust. Phone</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                        </tr>
                                    </thead>
                                    <tfoot className='tfooter'>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Region</th>
                                            <th>Technician</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Products</th>
                                            <th>Status</th>
                                            <th>Reason</th>
                                            <th>Appt. Date</th>
                                            <th>Appt. Time</th>
                                            <th>Customer</th>
                                            <th>Cust. Phone</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        {
                                            this.state.orderData.slice(indexOfFirstOrder, indexOfLastOrder).map((orderData, index) => (
                                                <tr key={index} value={this.state.value}>
                                                    <td>
                                                        <strong>
                                                            {orderData.woid}
                                                        </strong>
                                                    </td>
                                                    <td><p>{orderData.region}</p></td>
                                                    <td>{orderData.tech}</td>
                                                    <td><code>{orderData.email}</code></td>
                                                    <td>
                                                        <div className="button">
                                                            {orderData.tech_phone}
                                                        </div>
                                                    </td>
                                                    <td>{orderData.products}</td>
                                                    <td>{orderData.status}</td>
                                                    <td>{orderData.reason}</td>
                                                    <td>{orderData.appt_date}</td>
                                                    <td>{orderData.appt_time}</td>
                                                    <td>{orderData.customer}</td>
                                                    <td>{orderData.cust_phone}</td>
                                                    <td>{orderData.address}</td>
                                                    <td>{orderData.city}</td>
                                                    <td>{orderData.state}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                                <div>
                                    <ul id='page-numbers'>
                                        {renderPageNumbers}
                                    </ul>
                                </div>
                            </div>
                        </div >
                    </div>
                </section >
            </div >

        );
    }
}

export default Orders;