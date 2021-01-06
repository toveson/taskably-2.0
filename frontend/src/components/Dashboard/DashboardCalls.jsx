import React, { Component } from 'react';
// import API from '../../util/api.js';
import PropTypes from 'prop-types';

class DashboardCalls extends Component {
    render() {
        // console.log('rsn: ', this.props.rsn);
        const rsn = this.props.rsn;
        // console.log('rsn: ', rsn);
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
                                        {rsn[0].count}
                                        {/* countWoN */}
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
                                        {rsn[1].count}
                                        {/* countWoS */}
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
                                        {rsn[2].count}
                                        {/* countWoT */}
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

DashboardCalls.propTypes = { rsn: PropTypes.any };

export default DashboardCalls;
