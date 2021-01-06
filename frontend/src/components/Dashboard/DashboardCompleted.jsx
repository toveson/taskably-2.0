import React, { Component } from 'react';

class DashboardCompleted extends Component {
    render() {
        return (
            <div>
                {/* DashboardCompleted */}
                <div className='notification is-success has-text countWOC'>
                    {/* <p className='title is-1'>{{ countWoC }}</p> */}
                    <p className='title is-1'>countWoC</p>
                    <p className='subtitle is-4'>Completed Work Orders</p>
                </div>
            </div>

        );
    }
}

export default DashboardCompleted;
