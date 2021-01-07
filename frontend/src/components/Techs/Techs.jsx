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
            console.log('tech:', response.data);
            this.setState({ techData: response.data });
        });
    }

    render() {
        const { techData, currentPage, techsPerPage } = this.state;

        // Logic for displaying current technicians
        const indexOfLastTech = currentPage * techsPerPage;
        const indexOfFirstTech = indexOfLastTech - techsPerPage;
        const currentTechs = techData.slice(indexOfFirstTech, indexOfLastTech);

        console.log(techData);
        console.log(currentTechs);
        console.log(indexOfFirstTech);
        console.log(indexOfLastTech);



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
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Region Code</th>
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





// import React, { Component } from 'react';
// import Menu from '../Menu/Menu';
// import Navbar from '../Navbar/Navbar';


// class Techs extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <section className="section">
//                     <div className="columns">
//                         <Menu />

//                         <div className="column">
//                             <h1 className="title" id='technicians-H1'>Technicians</h1>

//                             <nav className="level">
//                                 <div className="level-left">
{/* {{!-- Disabled for future deployment --}} */ }
{/* {{!-- < div className="level-item">
                                    <p className="subtitle is-5"><strong>3</strong> Technicians</p>
                                    </div> --}} */}


{/* {{!-- Disabled for future deployment --}} */ }
{/* {{!-- < div className="level-item is-hidden-tablet-only">
                                    <div className="field has-addons">
                                    <p className="control">
                                    <input type="text" className="input" placeholder="Name, email...">
                                    </p>
                                    <p className="control">
                                        <button className="button">Search</button>
                                    </p>
                                    </div>
                                    </div> --}} */}
// </div>

{/* {{!-- Disabled for future deployment --}} */ }
{/* {{!-- < div className="level-right">
                    <p className="level-item"><strong>All</strong></p>
                        <p className="level-item"><a>With orders</a></p>
                        <p className="level-item"><a>Without orders</a></p>
                    </div> --}} */}
//                             </nav>

//                             <div className="table-container">
//                                 <table className="table is-hoverable is-fullwidth">
//                                     <thead>
//                                         <tr>
//                                             <th>Name</th>
//                                             <th>Email</th>
//                                             <th>Phone Number</th>
//                                         </tr>
//                                     </thead>
//                                     <tfoot>
//                                         <tr>
//                                             <th>Name</th>
//                                             <th>Email</th>
//                                             <th>Phone Number</th>
//                                         </tr>
//                                     </tfoot >
//                                     <tbody>

//                                         <tr>
//                                             <td>
//                                                 <strong>
//                                                     {/* <p>{{ first_name }} {{ last_name }}</p> */}
//                                                     <p>first_name last_name</p>
//                                                 </strong>
//                                             </td>
//                                             <td><code> email </code></td>

//                                             <td>
//                                                 <div className="buttons">
//                                                     phone
//                                                 </div>
//                                             </td >
//                                         </tr >
//                                     </tbody >
//                                 </table >


//                             </div >
//                         </div >
//                     </div >
//                 </section >
//             </div >

//         );
//     }
// }

// export default Techs;