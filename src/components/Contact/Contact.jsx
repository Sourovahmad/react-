import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div className='contact_area'>
            <div className="container">
                <div className="contact_inner">
                    <h1 className='title'>Will add text Later</h1>
                    <div className="info">
                        <h5 className="info_title">Will Include:</h5>
                        <div className='inner_info'>
                            <p>What in Optimal Value</p>
                            <p>How is Optimal Value Different</p>
                            <p>Who we Are</p>
                        </div>
                    </div>

                    <form className='form_area' action="">
                        <h4 className='form_title'>Contact Us</h4>
                    
                        <div className="d-flex justify-content-between mb-3">
                            <div className="w-50 me-2 me-lg-3">
                                <span>First Name:</span>
                                <input href='#' type='text' className='form-control mt-1' />
                            </div>

                            <div className="w-50 ms-2 ms-lg-3">
                                <span>Last Name:</span>
                                <input href='#' type='text' className='form-control mt-1' />
                            </div>
                        </div>

                        <div className="d-flex justify-content-around mb-3">
                            <div className="w-50 me-2 me-lg-3">
                                <span>Email:</span>
                                <input href='#' type='email' className='form-control mt-1' />
                            </div>

                            <div className="w-50 ms-2 ms-lg-3">
                                <span>Confirm Email:</span>
                                <input href='#' type='email' className='form-control mt-1' />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <span>Message:</span>
                            <textarea rows={5} cols={100} className='form-control mt-1' ></textarea>
                        </div>

                        <button type='submit' className='submit' >SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;