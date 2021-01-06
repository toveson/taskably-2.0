import React from 'react';
import PropTypes from 'prop-types';

function DashboardTotal(props) {
    // console.log('props: ', props);
    const stats = props.stats;
    // console.log(stats);
    return (
        <div>
            {/* DashboardTotal */}

            <div className="notification is-link has-text countWO">
                <p className="title is-1">{stats[3]?.count}</p>
                {/* <p className="title is-1">countWO</p> */}

                <p className="subtitle is-4">Total Work Orders</p>
            </div>
        </div>
    );
}

DashboardTotal.propTypes = { stats: PropTypes.any };

export default DashboardTotal;