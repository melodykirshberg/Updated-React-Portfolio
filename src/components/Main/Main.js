import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Main.css';

class Main extends Component {
    state = {};
    render() {
        return (
            <div className='landing'>
                <div className='landingText'>
                    <Fade bottom cascade>
                        Melody Kirshberg
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Main;