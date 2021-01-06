import React from 'react';
import PropTypes from 'prop-types';

function DashboardCompleted(props) {
    // console.log('props: ', props);
    const stats = props.stats;
    // console.log(stats);
    return (
        <div>
            {/* DashboardCompleted */}
            <div className='notification is-success has-text countWOC'>
                <p className='title is-1'>{stats[1]?.count}</p>
                {/* <p className='title is-1'>countWoC</p> */}
                <p className='subtitle is-4'>Completed Work Orders</p>
            </div>
        </div>
    );
}

DashboardCompleted.propTypes = { stats: PropTypes.any };

export default DashboardCompleted;
