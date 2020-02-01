import React, { Component } from 'react';
import './Project.css';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {}
    render() {
        return (
            <Fade bottom>
                <div className='project'>
                    <a href={this.props.url}>
                        <img src={this.props.img} alt={this.props.title}></img>
                    </a>
                    <h1>{this.props.title}</h1>
                    <h4>{this.props.role}</h4>
                    <p>{this.props.text}</p>
                    <a href={this.props.link}>Live link</a>
                </div>
            </Fade>
        )
    }
}

export default Project;