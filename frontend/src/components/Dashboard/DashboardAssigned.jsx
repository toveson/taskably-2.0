import React, { Component } from 'react';

class DashboardAssigned extends Component {
    render() {
        return (
            <div>
                <p>DashboardAssigned</p>
                <div className="notification is-primary has-text">
                    {/* <p className="title is-1">{{ countWoA }}</p> */}
                    <p className="title is-1">countWoA</p>
                    <p className="subtitle is-4">Assigned Workorders</p>
                </div>
            </div>
        );
    }
}

export default DashboardAssigned;
