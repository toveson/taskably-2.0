import React, { Component } from 'react';
import DirectTv from '../../assets/directv-logo.png';
import KFB from '../../assets/KFB-Logo.png';
import Orby from '../../assets/orby-logo.png';
import Viasat from '../../assets/viasat-logo.png';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import API from '../../util/api.js';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inv: []
        };
    }

    componentDidMount() {
        API.getStatsInv().then(response => {
            // console.log('inv:', response.data);
            this.setState({ inv: response.data });
        });
    }

    render() {
        const { inv } = this.state;

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
                                    <p className="level-item tag is-success is-large" id='inventoryItemsCount' >
                                        Items Available
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
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <div className="has-text-right">
                                                    <p className="tag is-success is-3 is-marginless is-large has-text-weight-bold">
                                                        {inv[1]?.Units}
                                                    </p>
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
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <div className="has-text-right">
                                                    <p className="tag is-success is-3 is-marginless is-large has-text-weight-bold">
                                                        {inv[0]?.Units}
                                                    </p>
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
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <div className="has-text-right">
                                                    <p className="tag is-success is-3 is-marginless is-large has-text-weight-bold">
                                                        {inv[2]?.Units}
                                                    </p>
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
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <div className="has-text-right">
                                                    <p className="tag is-success is-3 is-marginless is-large has-text-weight-bold">
                                                        {inv[3]?.Units}
                                                    </p>
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