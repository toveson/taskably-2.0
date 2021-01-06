import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';


class Orders extends Component {
    render() {
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
                                    <thead>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Technician</th>
                                            <th>Customer Name</th>
                                            <th>Appointment Date</th>
                                            <th>Products</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Technician</th>
                                            <th>Customer Name</th>
                                            <th>Appointment Date</th>
                                            <th>Products</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        <tr>
                                            <td><strong>id</strong></td>
                                            <td>Tech.first_name Tech.last_name</td>
                                            <td>Customer.first_name Customer.last_name</td>
                                            <td>appt_date</td>
                                            <td>products</td>
                                            <td><span className="">reason</span></td>
                                            <td><span className="tag {{scolor}}">status</span></td>
                                        </tr>

                                    </tbody>
                                </table>

                                {/* {{!-- Disabled for future deployment --}} */}
                                {/* {{!-- <nav className="pagination">
              <a className="pagination-previous">Previous</a>
              <a className="pagination-next">Next</a>
              <ul className="pagination-list">
                  <li><a className="pagination-link is-current">1</a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a className="pagination-link">45</a></li>
                  <li><a className="pagination-link ">46</a></li>
                  <li><a className="pagination-link">47 </a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a className="pagination-link">86</a></li>
              </ul>
          </nav> --}} */}
                            </div>
                        </div >
                    </div>
                </section >
            </div >

        );
    }
}

export default Orders;