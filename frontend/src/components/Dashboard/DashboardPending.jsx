import React, { Component } from 'react';

class DashboardPending extends Component {
    render() {
        return (
            <div>
                {/* DashboardPending */}
                <div className='notification is-info has-text countWOP'>
                    {/* <p className='title is-1'>{{countWoP}}</p> */}
                    <p className='title is-1'>countWoP</p>
                    <p className='subtitle is-4'>Pending Work Orders</p>
                </div>
            </div>

        );
    }
}

export default DashboardPending;
