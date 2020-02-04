import React, { Component } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Contact.css';
import Pdf from './Resume.pdf';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    state = {};
    render() {
        return (
            <div className='contact'>
                <h1 className='contact-heading'>
                    <Fade bottom cascade>
                        CONTACT
                    </Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <p className='contact-text'>Feel free to reach out to me!</p>
                        <a href='mailto: melodykirshberg@gmail.com'><FaEnvelope /></a>
                        <a href='https://www.github.com/verlitas'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/verlitas/'><FaLinkedinIn /></a>
                        <a href={Pdf}><FaFileAlt /></a>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Contact;