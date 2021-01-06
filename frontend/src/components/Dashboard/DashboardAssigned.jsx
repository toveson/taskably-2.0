import React from 'react';
import PropTypes from 'prop-types';

function DashboardAssigned(props) {
    // console.log('props: ', props);
    const stats = props.stats;
    // console.log(stats);
    return (
        <div>
            {/* DashboardAssigned */}
            <div className="notification is-primary has-text countWOA">
                <p className="title is-1">{stats[0]?.count}</p>
                {/* <p className="title is-1">countWoA</p> */}
                <p className="subtitle is-4">Assigned Work Orders</p>
            </div>
        </div>
    );
}

DashboardAssigned.propTypes = { stats: PropTypes.any };

export default DashboardAssigned;