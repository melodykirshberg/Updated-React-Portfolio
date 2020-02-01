import React, { Component } from 'react';
import Project from '../Project/Project.js';
import Data from './Data.js';
import './Portfolio.css';
import Fade from 'react-reveal/Fade';

class Portfolio extends Component {
    state = {}
    render() {
        return (
            <div className='portfolio'>
                <h1 className="heading">
                    <Fade bottom cascade>
                        PORTFOLIO
                </Fade>
                </h1>
                <div className="portfolio-content">
                    {Data.projects.map((project) => (
                        <Project key={project.id}
                            img={project.img}
                            title={project.title}
                            role={project.role}
                            text={project.text}
                            url={project.url}
                            link={project.link} />
                    ))}
                </div>
                <h1 className='other'>
                    <Fade bottom cascade>
                        Interested in my other work?
                </Fade>
                </h1>
                <div className='repo-btn'>
                    <a href="https://www.github.com/verlitas?tab=repositories" className="bttn">
                        Check out my repos
                        </a>
                </div>
            </div>
        )
    }
}
export default Portfolio;