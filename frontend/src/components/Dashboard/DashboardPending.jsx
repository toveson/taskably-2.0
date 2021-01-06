import React from 'react';
import PropTypes from 'prop-types';

function DashboardPending(props) {
    // console.log('props: ', props);
    const stats = props.stats;
    // console.log(stats);
    return (
        <div>
            {/* DashboardPending */}
            <div className='notification is-info has-text countWOP'>
                <p className='title is-1'>{stats[2]?.count}</p>
                {/* <p className='title is-1'>countWoP</p> */}
                <p className='subtitle is-4'>Pending Work Orders</p>
            </div>
        </div>
    );
}

DashboardPending.propTypes = { stats: PropTypes.any };

export default DashboardPending;