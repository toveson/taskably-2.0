import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import CheckmarkLogo from '../../assets/checkmark-logo.png';
import API from '../../util/api';
// import Select from 'react-dropdown-select';

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
            , techs: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        API.getProducts().then(response => {
            console.log('products: ', response.data);
            this.setState({ products: response.data });
        });

        API.getReason().then(response => {
            console.log('reason: ', response.data);
            this.setState({ reason: response.data });
        });

        API.getCustomers().then(response => {
            console.log('customers: ', response.data);
            this.setState({ customers: response.data });
        });

        API.getStatus().then(response => {
            console.log('status: ', response.data);
            this.setState({ status: response.data });
        });

        API.getTechs().then(response => {
            console.log('tech:', response.data);
            this.setState({ techData: response.data });
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