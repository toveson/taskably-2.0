import React, { Component } from 'react';

class DashboardTechnicians extends Component {
    render() {
        return (
            <div>
                {/* DashboardTechnicians */}
                <div className="card">
                    <div className="card-content cardDashboard">
                        <h2 className="title is-4"><u>Technicians</u></h2>

                        {/* {{#each techs}} */}

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


                        <a className="button is-link is-outlined" id='buttonDashboard' href="techs">View all technicians</a>

                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardTechnicians;
