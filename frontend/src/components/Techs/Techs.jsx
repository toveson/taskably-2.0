import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';


class Techs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="section">
                    <div className="columns">
                        <Menu />

                        <div className="column">
                            <h1 className="title" id='technicians-H1'>Technicians</h1>

                            <nav className="level">
                                <div className="level-left">
                                    {/* {{!-- Disabled for future deployment --}} */}
                                    {/* {{!-- < div className="level-item">
                                    <p className="subtitle is-5"><strong>3</strong> Technicians</p>
                                    </div> --}} */}


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

                            <div className="table-container">
                                <table className="table is-hoverable is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                        </tr>
                                    </tfoot >
                                    <tbody>

                                        <tr>
                                            <td>
                                                <strong>
                                                    {/* <p>{{ first_name }} {{ last_name }}</p> */}
                                                    <p>first_name last_name</p>
                                                </strong>
                                            </td>
                                            <td><code> email </code></td>

                                            <td>
                                                <div className="buttons">
                                                    phone
                                                </div>
                                            </td >
                                        </tr >
                                    </tbody >
                                </table >


                            </div >
                        </div >
                    </div >
                </section >
            </div >

        );
    }
}

export default Techs;