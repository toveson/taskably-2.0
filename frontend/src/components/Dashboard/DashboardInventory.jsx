import React, { Component } from 'react';
import DirectTv from '../../assets/directv-logo.png';
import KFB from '../../assets/KFB-Logo.png';
import Orby from '../../assets/orby-logo.png';
import Viasat from '../../assets/viasat-logo.png';
import API from '../../util/api.js';

class DashboardInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inv: []
        };
    }

    componentDidMount() {
        API.getInvInstalled().then(response => {
            // console.log('inv:', response.data);
            this.setState({ inv: response.data });
        });
    }

    render() {
        const { inv } = this.state;

        return (
            <div>
                {/* DashboardInventory */}
                <div className="card">
                    <div className="card-content cardDashboard">
                        <h2 className=" title is-4"><u>Inventory</u>
                        </h2>

                        <div className="media">
                            <div className="media-left is-marginless">
                                <p className="number">{inv[2]?.pr_cd}</p>
                            </div>
                            <div className="media-left">
                                <img src={DirectTv} alt="DirectTv Logo" width="80" />
                            </div>
                            <div className="media-content">
                                <p className="title is-5 is-spaced is-marginless">
                                    DirectTv
                                </p>
                            </div>
                            <div className="media-right">
                                {inv[2]?.installed} Installed
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left is-marginless">
                                <p className="number">{inv[1]?.pr_cd}</p>
                            </div>
                            <div className="media-left">
                                <img src={KFB} alt="Amazon Key for Business" width="80" />
                            </div>
                            <div className="media-content">
                                <p className="title is-5 is-spaced is-marginless">
                                    KfB
                                </p>
                            </div>
                            <div className="media-right">
                                {inv[1]?.installed} Installed
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left is-marginless">
                                <p className="number">{inv[2]?.pr_cd}</p>
                            </div>
                            <div className="media-left">
                                <img src={Orby} alt="Orby TV Logo" width="80" />
                            </div>
                            <div className="media-content">
                                <p className="title is-5 is-spaced is-marginless">
                                    Orby TV
                                </p>
                            </div>
                            <div className="media-right">
                                {inv[2]?.installed} Installed
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left is-marginless">
                                <p className="number">{inv[3]?.pr_cd}</p>
                            </div>
                            <div className="media-left">
                                <img src={Viasat} alt="Viasat Logo" width="80" />
                            </div>
                            <div className="media-content">
                                <p className="title is-5 is-spaced is-marginless">
                                    Viasat
                                </p>
                            </div>
                            <div className="media-right">
                                {inv[3]?.installed} Installed
                            </div>
                        </div>

                        <a className="button is-link is-outlined" id='buttonDashboard' href="inventory">View all inventory</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default DashboardInventory;
