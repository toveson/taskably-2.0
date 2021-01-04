import React, { Component } from 'react';

class DashboardTotal extends Component {
    render() {
        return (
            <div>
                <p>DashboardTotal</p>
                <div className="notification is-link has-text countWO">
                    {/* <p className="title is-1">{{ countWO }}</p> */}
                    <p className="title is-1">countWO</p>
                    <p className="subtitle is-4">Total Workorders</p>
                </div>
            </div>
        );
    }
}

export default DashboardTotal;