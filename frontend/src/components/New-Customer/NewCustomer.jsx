import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import CheckmarkLogo from '../../assets/checkmark-logo.png';


class NewCustomer extends Component {
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
                                                                required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-user-edit'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Last Name</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. Anderson' id='last_name'
                                                                required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-user-edit'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Email</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='email' placeholder='e.g. josephanderson@example.com'
                                                                id='email' required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fa fa-envelope'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>Address</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. 123 Main St' id='address'
                                                                required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>City</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. Salt Lake City' id='city'
                                                                required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label'>State</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='text' placeholder='e.g. UT' id='state' maxLength='2' style={{ textTransform: 'uppercase' }} required />
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
                                                            <input className='input' type='text' placeholder='e.g. 84101' id='zip' maxLength='5' required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-map-marked-alt'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <label className='label' htmlFor='phone'>Phone Number</label>
                                                        <div className='control has-icons-left'>
                                                            <input className='input' type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                                                placeholder='e.g. 801-555-0000' id='phone' maxLength='12' required />
                                                            <span className='icon is-small is-left'>
                                                                <i className='fas fa-phone-office'></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='field'>
                                                        <button className='button is-success' type='submit' id='modal-button'>Create</button>
                                                        {/* Modal */}
                                                        <div className='modal' id='page-modal'>
                                                            <div className='modal-background'>
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
                                                                <button className='modal-close is-large' aria-label='close'></button>
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
            </div>
        );
    }
}

export default NewCustomer;