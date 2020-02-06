import React, { Component } from 'react';
import './About.css'
import Self from './Self.jpg';
import Data from './Data.js';
import Fade from 'react-reveal/Fade';

class About extends Component {
    state = {}
    render() {
        return (
            <div className='about'>
                <div className='aboutText'>
                    <Fade left cascade>
                        <h1>ABOUT</h1>
                    </Fade>
                    <Fade bottom>
                        <h3>{Data.header}</h3>
                        <img src={Self} alt='Self'></img>
                        <p>{Data.bio}</p>
                        <div className='available'>
                            I am currently <a href='mailto:melodykirshberg@gmail.com' className='open'> open </a>for projects
                        </div>
                    </Fade>
                </div>
            </div>);
    }
}

export default About;