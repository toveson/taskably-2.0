// import React, { Component } from 'react';
// // import API from '../../util/api.js';

// class DashboardTotal extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         countWO: 0
//     //     };
//     // }


//     // componentDidMount() {
//     //     API.getStatsWO().then(response => {
//     //         console.log('response:', response.data[3].count);
//     //         this.setState({ countWO: response.data[3].count });
//     //     });
//     // }

//     render(props) {
//         return (

//             <div>
//                 {/* DashboardTotal */}

//                 <div className="notification is-link has-text countWO">
//                     <p className="title is-1">{props.children[3].count}</p>
//                     {/* <p className="title is-1">countWO</p> */}

//                     <p className="subtitle is-4">Total Work Orders</p>
//                 </div>
//             </div>
//         );
//     }
// }

// export default DashboardTotal;

import React from 'react';

function DashboardTotal(props) {
    console.log('props: ', props);

    return (
        <div>
            {/* DashboardTotal */}

            <div className="notification is-link has-text countWO">
                {/* <p className="title is-1">{props.stats[3].count}</p> */}
                <p className="title is-1">countWO</p>

                <p className="subtitle is-4">Total Work Orders</p>
            </div>
        </div>
    );
}
export default DashboardTotal;