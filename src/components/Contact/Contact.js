import React, { Component } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

class Contact extends Component {
    state = {};
    render() {
        return (
            <div className='contact'>
                <h1 className='contact-heading'>
                        CONTACT
                </h1>
                    <div className='contact-content'>
                        <p className='contact-text'>Feel free to reach out to me!</p>
                        <a href='mailto: melodykirshberg@gmail.com' className='email'><FaEnvelope /></a>
                        <a href='https://www.github.com/verlitas' className='github'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/verlitas/' className='linkedin'><FaLinkedinIn /></a>
                    </div>
            </div>
        )
    }
}

export default Contact;