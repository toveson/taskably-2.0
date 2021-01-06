import React, { Component } from 'react';
import DirectTv from '../../assets/directv-logo.png';
import KFB from '../../assets/KFB-Logo.png';
import Orby from '../../assets/orby-logo.png';
import Viasat from '../../assets/viasat-logo.png';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';

class Inventory extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="section">
                    <div className="columns">
                        <Menu />

                        <div className="column">
                            <h1 className="title" id='inventory-H1'>Inventory</h1>

                            <nav className="level">
                                <div className="level-left">
                                    <div className='level-item'>
                                        <p className="subtitle is-5" id='inventoryItems'><strong id='inventoryItemsCount'>4</strong> items</p>
                                    </div>

                                    <p className="level-item tag is-success">
                                        Available
                                    </p>
                                </div>

                            </nav>

                            <div className="columns is-multiline">
                                <div className="column is-12-tablet is-6-desktop is-4-widescreen">
                                    <article className='box'>
                                        <div className="media">
                                            <aside className="media-left">
                                                <img src={DirectTv} alt="Direct TV Logo" width="80" />
                                            </aside>
                                            <div className="media-content">
                                                <p className="title is-5 is-spaced is-marginless">
                                                    DirectTv
                                                </p>
                                                <div className="content is-small">
                                                    Product Code: DT
                                                    <br />
                                                    Product ID: 1
                                                    <br />

                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="column is-12-tablet is-6-desktop is-4-widescreen">
                                    <article className='box'>
                                        <div className="media">
                                            <aside className="media-left">
                                                <img src={KFB} alt="Amazon Key for Business" width="80" />
                                            </aside>
                                            <div className="media-content">
                                                <p className="title is-5 is-spaced is-marginless">
                                                    KfB (Amazon)
                                                </p>

                                                <div className="content is-small">
                                                    Product Code: KB
                                                    <br />
                                                    Product ID: 2
                                                    <br />
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="column is-12-tablet is-6-desktop is-4-widescreen">
                                    <article className='box'>
                                        <div className="media">
                                            <aside className="media-left">
                                                <img src={Orby} alt="Orby TV Logo" width="80" />
                                            </aside>
                                            <div className="media-content">
                                                <p className="title is-5 is-spaced is-marginless">
                                                    Orby TV
                                                </p>
                                                <div className="content is-small">
                                                    Product Code: OT
                                                    <br />
                                                    Product ID: 3
                                                    <br />
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="column is-12-tablet is-6-desktop is-4-widescreen">
                                    <article className="box">
                                        <div className="media">
                                            <aside className="media-left">
                                                <img src={Viasat} alt="Viasat Logo" width="80" />
                                            </aside>
                                            <div className="media-content">
                                                <p className="title is-5 is-marginless">
                                                    Viasat
                                                </p>
                                                <div className="content is-small">
                                                    Product Code: VS
                                                    <br />
                                                    Product ID: 4
                                                    <br />
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Inventory;