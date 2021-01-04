import React, { Component } from 'react';

class DashboardCalls extends Component {
    render() {
        return (
            <div>
                {/* DashboardCalls */}
                <div className="card">
                    <div className="card-content cardDashboard">
                        <h2 className="title is-4"><u>Calls</u></h2>

                        <div className="level">
                            <div className="level-left">
                                <div>
                                    <p className="title is-5 is-marginless">
                                        New Installs
                                    </p>
                                    <small>

                                    </small>
                                </div>
                            </div>

                            <div className="level-right">
                                <div className="has-text-right">
                                    <p className="tag is-success is-5 is-marginless is-large has-text-weight-bold">
                                        {/* {{ countWoN }} */}
                                                 countWoN
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="level">
                            <div className="level-left">
                                <div>
                                    <p className="title is-5 is-marginless">
                                        Service Calls
                                    </p>
                                    <small>

                                    </small>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="has-text-right">
                                    <p className="tag is-warning is-5 is-marginless is-large has-text-weight-bold">
                                        {/* {{ countWoS }} */}
                                                countWoS
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="level">
                            <div className="level-left">
                                <div>
                                    <p className="title is-5 is-marginless ">
                                        Trouble Calls
                                    </p>
                                    <small>

                                    </small>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="has-text-right">
                                    <p className="tag is-danger is-5 is-marginless is-large has-text-weight-bold">
                                        {/* {{ countWoT }} */}
                                                countWoT
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a className="button is-link is-outlined" id='buttonDashboard' href="orders">View all orders</a>

                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardCalls;
