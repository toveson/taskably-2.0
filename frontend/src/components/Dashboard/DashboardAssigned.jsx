import React, { Component } from 'react';

class DashboardAssigned extends Component {
    render() {
        return (
            <div>
                {/* DashboardAssigned */}
                <div className="notification is-primary has-text countWOA">
                    {/* <p className="title is-1">{{ countWoA }}</p> */}
                    <p className="title is-1">countWoA</p>
                    <p className="subtitle is-4">Assigned Work Orders</p>
                </div>
            </div>
        );
    }
}

export default DashboardAssigned;
