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
                    <div className='minorText'>
                        <Fade bottom cascade>
                            Front-end / Full stack Web Developer
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;