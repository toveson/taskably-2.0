import React, { Component } from 'react';


class DashboardDate extends Component {
    render() {
        return (
            <div>
                <h1 className='subtitle is-3'>
                    {/* <!-- Insert JS Time/Date --> */}
                    {/* <strong><span id='spanDate'></span></strong>
                    <script type='text/javascript'>

                        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                        let tomorrow = new Date();

                        tomorrow.setTime(tomorrow.getTime());

                        document.getElementById('spanDate').innerHTML = months[tomorrow.getMonth()] + ' ' + tomorrow.getDate() + ', ' + tomorrow.getFullYear();
                    </script> */}
                </h1>
            </div>
        );
    }
}
export default DashboardDate;