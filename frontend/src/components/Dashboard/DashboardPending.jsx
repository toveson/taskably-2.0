import React, { Component } from 'react';

class DashboardPending extends Component {
    render() {
        return (
            <div>
                <p>DashboardPending</p>
                <div className='notification is-info has-text countWOP'>
                    {/* <p className='title is-1'>{{countWoP}}</p> */}
                    <p className='title is-1'>countWoP</p>
                    <p className='subtitle is-4'>Pending Workorders</p>
                </div>
            </div>

        );
    }
}

export default DashboardPending;
