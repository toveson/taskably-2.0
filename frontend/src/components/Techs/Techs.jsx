import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import API from '../../util/api';

class Techs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            techData: [],
            currentPage: 1,
            techsPerPage: 15
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        API.getTechs().then(response => {
            // console.log('tech:', response.data);
            this.setState({ techData: response.data });
        });
    }

    render() {
        const { techData, currentPage, techsPerPage } = this.state;

        // Logic for displaying current technicians
        const indexOfLastTech = currentPage * techsPerPage;
        const indexOfFirstTech = indexOfLastTech - techsPerPage;
        // const currentTechs = techData.slice(indexOfFirstTech, indexOfLastTech);

        // console.log(techData);
        // console.log(currentTechs);
        // console.log(indexOfFirstTech);
        // console.log(indexOfLastTech);



        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(techData.length / techsPerPage); i++) {
            pageNumbers.push(i);
        }


        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <Navbar />
                <section className="section">
                    <div className="columns">
                        <Menu />

                        <div className="column">
                            <h1 className="title" id='technicians-H1'>Technicians</h1>

                            <nav className="level">
                                <div className="level-left">
                                    <p className="level-item">
                                        <a className="button is-success is-focus" id='buttonTechnicianCreate' href="new-tech">
                                            <span className='icon is-small'>
                                                <i className="fas fa-user-edit"> </i>
                                            </span>
                                            <span>Create New Technician</span>
                                        </a>
                                    </p>
                                </div>
                            </nav>
                            <div>
                                <div className="table-container">
                                    <table className="table is-hoverable is-fullwidth">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Region Code</th>
                                                <th>W.O. Pending</th>
                                                <th>W.O. Assigned</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Region Code</th>
                                                <th>W.O. Pending</th>
                                                <th>W.O. Assigned</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>

                                            {
                                                this.state.techData.slice(indexOfFirstTech, indexOfLastTech).map((techData, index) => (
                                                    <tr key={index} value={this.state.value}>
                                                        <td>
                                                            <strong>
                                                                <p>{techData.Tech}</p>
                                                            </strong>
                                                        </td>
                                                        <td><code>{techData.Email}</code></td>
                                                        <td>
                                                            <div className="button">
                                                                {techData.Phone}
                                                            </div>
                                                        </td>
                                                        <td>{techData.Region}</td>
                                                        <td>
                                                            <strong>
                                                                <center>{techData.WoPend}</center>
                                                            </strong>
                                                        </td>
                                                        <td>
                                                            <strong>
                                                                <center>{techData.WoAsnd}</center>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                    <div>
                                        <ul id='page-numbers'>
                                            {renderPageNumbers}
                                        </ul>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div>
                </section >
            </div >

        );
    }
}

export default Techs;