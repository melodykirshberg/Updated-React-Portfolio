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
                    <h1><Fade bottom cascade>ABOUT</Fade></h1>
                    <Fade bottom>
                        <h3>{Data.header}</h3>
                        <p>{Data.bio}</p>
                    </Fade>
                </div>
                <img src={Data.image} alt='Portfolio'></img>
            </div>);
    }
}

export default About;