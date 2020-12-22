import React, { Component } from 'react';
import DirectTv from '../../assets/directv-logo.png';
import KFB from '../../assets/KFB-Logo.png';
import Orby from '../../assets/orby-logo.png';

class DashboardInventory extends Component {
    render() {
        return (
            <div>
                <p>DashboardInventory</p>
                <div className="card">
                    <div className="card-content">
                        <h2 className=" title is-4">Inventory</h2>

                        <div className="media">
                            <div media-left is-marginless>
                                <p className="number">1</p>
                            </div>
                            <div className="media-left">
                                <img src={DirectTv} alt="Direct TV Logo" width="80" />
                            </div>
                            <div className="media-content">
                                <p className="title is-5 is-spaced is-marginless">
                                    DirecTv
                                </p>
                            </div>
                            <div className="media-right">
                                202 sold
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left is-marginless">
                                <p className="number">2</p>
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
                                24 sold
                            </div>
                        </div>

                        <div className="media">
                            <div className="media-left is-marginless">
                                <p className="number">3</p>
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
                                4 sold
                            </div>
                        </div>

                        <a className="button is-link is-outlined" href="inventory">View all inventory</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default DashboardInventory;
