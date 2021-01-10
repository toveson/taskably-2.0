import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import CheckmarkLogo from '../../assets/checkmark-logo.png';
import API from '../../util/api';
import Select from 'react-dropdown-select';

class NewWO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p_pr_cd: ''
            , p_rsn_cd: ''
            , p_cust_id: ''
            , p_sta_cd: ''
            , p_tech_id: ''
            , p_appt: ''
            , success: false
            , products: []
            , reason: []
            , customers: []
            , status: []
            , tech: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        API.getProducts().then(response => {
            // console.log('products: ', response.data);
            this.setState({ products: response.data });
        });

        API.getReason().then(response => {
            // console.log('reason: ', response.data);
            this.setState({ reason: response.data });
        });

        API.getCustomers().then(response => {
            // console.log('customers: ', response.data);
            this.setState({ customers: response.data });
        });

        API.getStatus().then(response => {
            // console.log('status: ', response.data);
            this.setState({ status: response.data });
        });

        API.getTechs().then(response => {
            console.log('tech:', response.data);
            this.setState({ tech: response.data });
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(
            {
                [name]: value
            },
            () => console.log('newWOState: ', this.state));
    }

    handleSubmit(event) {
        event.preventDefault();
        API.postNewWO(this.state).then(() => {
            this.setState({ success: true });
        });
        this.setState({
            p_pr_cd: ''
            , p_rsn_cd: ''
            , p_cust_id: ''
            , p_sta_cd: ''
            , p_tech_id: ''
            , p_appt: ''
            , success: false
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <section className='section'>
                    <div className='columns'>
                        <Menu />

                        <div className='column'>
                            <section className='hero  '>
                                <div className='hero-body'>
                                    <div className='container'>
                                        <div className='columns '>
                                            <div className='column is-10-tablet is-6-desktop is-5-widescreen'>
                                                <form className='box login' id='new-customer'>
                                                    <div className='field has-text-centered'>
                                                        <img src={CheckmarkLogo} alt='taskably company logo' width='30' /><span
                                                            className='text has-text-weight-bold is-size-3 has-text-justified'>Create New Work Order</span>
                                                        <h2></h2>
                                                    </div>

                                                    <div className='field'>
                                                        <label className='label'>Product</label>
                                                        <div className='control has-icons-left'>
                                                            < Select
                                                                options={this.state.products}
                                                                labelField='Products'
                                                                valueField='pr_cd'
                                                                onChange={([values]) => {
                                                                    // console.log(values);
                                                                    this.setState({ p_pr_cd: values.pr_cd });
                                                                }}
                                                                dropdownPosition="auto"
                                                                name='p_pr_cd'
                                                                value={this.state.p_pr_cd}
                                                                searchable='true'
                                                                className='input' required
                                                            />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='field'>
                                                        <label className='label'>Reason</label>
                                                        <div className='control has-icons-left'>
                                                            < Select
                                                                options={this.state.reason}
                                                                labelField='reason'
                                                                valueField='rsn_cd'
                                                                onChange={([values]) => {
                                                                    // console.log(values);
                                                                    this.setState({ p_rsn_cd: values.rsn_cd });
                                                                }}
                                                                dropdownPosition="auto"
                                                                name='p_rsn_cd'
                                                                value={this.state.p_rsn_cd}
                                                                searchable='true'
                                                                className='input' required
                                                            />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='field'>
                                                        <label className='label'>Customer</label>
                                                        <div className='control has-icons-left'>
                                                            < Select
                                                                options={this.state.customers}
                                                                labelField='customer'
                                                                valueField='cust_id'
                                                                onChange={([values]) => {
                                                                    // console.log(values);
                                                                    this.setState({ p_cust_id: values.cust_id });
                                                                }}
                                                                dropdownPosition="auto"
                                                                name='p_cust_id'
                                                                value={this.state.p_cust_id}
                                                                searchable='true'
                                                                className='input' required
                                                            />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='field'>
                                                        <label className='label'>Status</label>
                                                        <div className='control has-icons-left'>
                                                            < Select
                                                                options={this.state.status}
                                                                labelField='status'
                                                                valueField='sta_cd'
                                                                onChange={([values]) => {
                                                                    // console.log(values);
                                                                    this.setState({ p_sta_cd: values.sta_cd });
                                                                }}
                                                                dropdownPosition="auto"
                                                                name='p_sta_cd'
                                                                value={this.state.p_sta_cd}
                                                                searchable='true'
                                                                className='input'
                                                            />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='field'>
                                                        <label className='label'>Technician</label>
                                                        <div className='control has-icons-left'>
                                                            < Select
                                                                options={this.state.tech}
                                                                labelField='Tech'
                                                                valueField='tech_id'
                                                                onChange={([values]) => {
                                                                    // console.log(values);
                                                                    this.setState({ p_tech_id: values.tech_id });
                                                                }}
                                                                dropdownPosition="auto"
                                                                name='p_tech_id'
                                                                value={this.state.p_tech_id}
                                                                searchable='true'
                                                                className='input'
                                                            />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>


                                                    <div className='field'>
                                                        <button className='button is-success' type='submit' id='modal-button'
                                                            onClick={this.handleSubmit}
                                                        >Create</button>
                                                        {/* Modal */}
                                                        <div className={'modal' + (this.state.success ? ' is-active' : '')} id='page-modal'>
                                                            <div className='modal-background' onClick={() => this.setState({ success: false })}
                                                            >
                                                            </div>
                                                            <div className='modal-content'>
                                                                <div className='section'>
                                                                    <div className='card'>
                                                                        <div className='card-content'>
                                                                            <p className='title'>
                                                                                Customer successfully created
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button className='modal-close is-large' aria-label='close'
                                                                    onClick={() => this.setState({ success: false })}></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </section >
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default NewWO;