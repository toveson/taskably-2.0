import React, { Component } from 'react';
import DashboardAssigned from './DashboardAssigned';
import DashboardPending from './DashboardPending';
import DashboardTotal from './DashboardTotal';
import DashboardDate from './DashboardDate';
import DashboardCompleted from './DashboardCompleted';

class Dashboard extends Component {
    render() {
        return (


            // {{!-- Date & Dashboards timeframe selection (Timeframe disabled for future deployment) --}}
            <div className="column">
                <div className="level">
                    <div className="level-left">
                        <DashboardDate />
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
                        <DashboardTotal />
                    </div>

                    {/* {{!-- Pending Orders tile --}} */}
                    <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                        <DashboardPending />
                    </div>

                    {/* {{!-- Assigned tile  --}} */}
                    <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                        <DashboardAssigned />
                    </div>

                    {/* {{!-- Completed Orders tile  --}} */}
                    <div className="column is-12-tablet is-6-desktop is-3-widescreen">
                        <DashboardCompleted />
                    </div>

                    {/* {{!-- Type of Orders tile --}} */}
                    <div className="column is-12-tablet is-6-desktop is-4-fullhd">
                        <div className="card">
                            <div className="card-content">
                                <h2 className="title is-4">Calls</h2>

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

                                <a className="button is-link is-outlined" href="orders">View all orders</a>

                            </div>
                        </div>
                    </div>

                    {/* Inventory Tile */}
                    <div className="column is-12-tablet is-6-desktop is-4-fullhd">
                        <div className="card">
                            <div className="card-content">
                                <h2 className=" title is-4">Inventory</h2>

                                <div className="media">
                                    <div media-left is-marginless>
                                        <p className="number">1</p>
                                    </div>
                                    <div className="media-left">
                                        <img src='/assets/images/directv-logo.png' alt="Direct TV Logo" width="80" />
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-5 is-spaced is-marginless">
                                            DirecTv
                                        </p>
                                    </div>
                                    <div className="media-right">
                                        202 sold
                                    </div>
                                </div>

                                <div className="media">
                                    <div className="media-left is-marginless">
                                        <p className="number">2</p>
                                    </div>
                                    <div className="media-left">
                                        <img src='/assets/images/KFB-Logo.png' alt="Amazon Key for Business" width="80" />
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-5 is-spaced is-marginless">
                                            KfB
                                        </p>
                                    </div>
                                    <div className="media-right">
                                        24 sold
                                    </div>
                                </div>

                                <div className="media">
                                    <div className="media-left is-marginless">
                                        <p className="number">3</p>
                                    </div>
                                    <div className="media-left">
                                        <img src='/assets/images/orby-logo.png' alt="Orby TV Logo" width="80" />
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-5 is-spaced is-marginless">
                                            Orby TV
                                        </p>
                                    </div>
                                    <div className="media-right">
                                        4 sold
                                    </div>
                                </div>

                                <a className="button is-link is-outlined" href="inventory">View all inventory</a>
                            </div>
                        </div>
                    </div>

                    <div className="column is-12-tablet is-6-desktop is-4-fullhd">
                        <div className="card">
                            <div className="card-content">
                                <h2 className="title is-4">Technicians</h2>

                                {/* {{#each techs}} */}
                    #each techs
                                <div className="media">
                                    <div className="media-left is-marginless">
                                        <p className="number">
                                            {/* {{ id }} */}
                                            id
                                        </p>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-5 is-spaced is-marginless">
                                            {/* {{ first_name }} {{ last_name }} */}
                                            first_name last_name
                                        </p>
                                        <p className="subtitle is-6">
                                            {/* {{ phone }} */}
                                            phone
                                        </p>
                                    </div>

                                    {/* {{!-- Disabled for future deployment --}} */}
                                    {/* {{!-- <div className="media-right">
                            10 orders
                        </div> --}} */}
                                </div>
                                {/* {{/each}} */}
                    /each

                                <a className="button is-link is-outlined" href="techs">View all technicians</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;