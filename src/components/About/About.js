import React, { Component } from 'react';
import './About.css'
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
                        <Fade bottom>
                            <img src={Data.image} alt='Self'></img>
                        </Fade>
                        <p>{Data.bio}</p>
                    </Fade>
                </div>
            </div>);
    }
}

export default About;