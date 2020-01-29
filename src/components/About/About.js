import React, { Component } from 'react';
import './About.css'
import Data from './Data.js';

class About extends Component {
    state = {}
    render() {
        return (
            <div className='about'>
                <div className='aboutText'>
                    <h1>ABOUT</h1>
                        <h3>{Data.header}</h3>
                        <p>{Data.bio}</p>
                </div>
                <img src={Data.image} alt='Portfolio'></img>
            </div>);
    }
}

export default About;