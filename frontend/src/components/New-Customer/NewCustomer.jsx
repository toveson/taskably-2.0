import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import CheckmarkLogo from '../../assets/checkmark-logo.png';
import API from '../../util/api';

class NewCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p_first_name: ''
            , p_last_name: ''
            , p_email: ''
            , p_address: ''
            , p_city: ''
            , p_state: ''
            , p_zip: 0
            , p_phone: ''
            , success: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('newCustState: ', this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        API.postNewCust(this.state).then(() => {
            this.setState({ success: true });
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
                                                            className='text has-text-weight-bold is-size-3 has-text-justified'>Create New Customer</span>
                                                        <h2></h2>
                                                    </div>

                                                    <div className='field'>
                                                        <label className='label'>First Name</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. Joseph' id='first_name'
                                                                required
                                                                name='p_first_name' value={this.state.p_first_name}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-user-edit'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Last Name</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. Anderson' id='last_name'
                                                                required
                                                                name='p_last_name' value={this.state.p_last_name}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-user-edit'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Email</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='email' placeholder='e.g. osephanderson@example.com'
                                                                id='email'
                                                                required
                                                                name='p_email' value={this.state.p_email}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fa fa-envelope'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Address</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. 123 Main St' id='address'
                                                                required
                                                                name='p_address' value={this.state.p_address}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>City</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. Salt Lake City' id='city'
                                                                required
                                                                name='p_city' value={this.state.p_city}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>State</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. UT' id='state'
                                                                maxLength='2' style={{ textTransform: 'uppercase' }} required
                                                                name='p_state' value={this.state.p_state}
                                                                onChange={this.handleInputChange} />
                                                            {/* // style={textTransform:'uppercase'} required > */}
                                                            {/* // style={{}}> {'state'.toUpperCase()} </input> */}
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>

                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Zip Code</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. 84101' id='zip'
                                                                maxLength='5' required
                                                                name='p_zip' value={this.state.p_zip}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label' htmlFor='phone'>Phone Number</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='tel' placeholder='e.g. 801-555-0000' id='phone'
                                                                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' maxLength='12' required
                                                                name='p_phone' value={this.state.p_phone}
                                                                onChange={this.handleInputChange} />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-phone-office'></i>
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

export default NewCustomer;