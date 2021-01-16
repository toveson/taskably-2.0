import React, { Component } from 'react';
import DashboardAssigned from './DashboardAssigned';
import DashboardPending from './DashboardPending';
import DashboardTotal from './DashboardTotal';
// import DashboardDate from './DashboardDate';
import DashboardCompleted from './DashboardCompleted';
import DashboardCalls from './DashboardCalls';
import DashboardInventory from './DashboardInventory';
import DashboardTechnicians from './DashboardTechnicians';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import '../../index.css';
import API from '../../util/api.js';
import SocketIo from '../Sockets/Sockets';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: []
            , rsn: []
        };
    }

    componentDidMount() {
        API.getStatsWO().then(response => {
            // console.log('stats:', response.data);
            this.setState({ stats: response.data });
        });

        API.getStatsRsn().then(response => {
            // console.log('rsn: ', response.data);
            this.setState({ rsn: response.data });
        });
    }

    render() {
        return (
            <div className='d shine'>
                <Navbar />
                <section className="section">
                    <div className="columns">
                        <Menu />

                        {/* {{!-- Date & Dashboards timeframe selection (Timeframe disabled for future deployment) --}} */}
                        <div className="column">
                            <div className="level">
                                <div className="level-left">
                                    {/* <DashboardDate /> */}
                                </div>

                                {/* {{!-- Disabled for future deployment --}} */}
                                {/* {{!-- <div className="level-right">
            <div className="select">
                <select>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>This Week</option>
                    <option selected>This Month</option>
                    <option>This Year</option>
                    <option>All Time</option>
                </select>
            </div>
        </div> --}} */}
                            </div>

                            {/* {{!-- Dashboard tiles --}} */}
                            <div className="columns is-multiline">
                                {/* {{!-- Total Orders tile --}} */}
                                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                                    <DashboardTotal stats={this.state.stats} />
                                </div>

                                {/* {{!-- Pending Orders tile --}} */}
                                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                                    <DashboardPending stats={this.state.stats} />
                                </div>

                                {/* {{!-- Assigned tile  --}} */}
                                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                                    <DashboardAssigned stats={this.state.stats} />
                                </div>

                                {/* {{!-- Completed Orders tile  --}} */}
                                <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                                    <DashboardCompleted stats={this.state.stats} />
                                </div>

                                {/* {{!-- Type of Calls tile --}} */}
                                <div className="column is-12-tablet is-6-desktop is-4-fullhd">
                                    <DashboardCalls rsn={this.state.rsn} />
                                </div>

                                {/* Inventory Tile */}
                                <div className="column is-12-tablet is-6-desktop is-4-fullhd">
                                    <DashboardInventory />
                                </div>

                                <div className="column is-12-tablet is-6-desktop is-4-fullhd">
                                    <DashboardTechnicians />
                                </div>
                                <div>
                                    <SocketIo></SocketIo>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Dashboard;