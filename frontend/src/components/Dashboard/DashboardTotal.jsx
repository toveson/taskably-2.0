import React, { Component } from 'react';
import API from '../../util/api.js';

class DashboardTotal extends Component {


    constructor(props) {
        super(props);
        this.state = {
            countWO: 0
        };

    }


    componentDidMount() {
        API.getStatsWO().then(response => {
            console.log('response:', response.data[3].count);
            this.setState({ countWO: response.data[3].count });
        });
    }

    render() {
        return (

            <div>
                <p>DashboardTotal</p>
                <div className="notification is-link has-text">
                    <p className="title is-1">{this.state.countWO}</p>
                    {/* <p className="title is-1">countWO</p> */}
                    <p className="subtitle is-4">Total Workorders</p>
                </div>
            </div>
        );
    }
}

export default DashboardTotal;