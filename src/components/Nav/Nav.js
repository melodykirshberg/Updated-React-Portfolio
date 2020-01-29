import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Nav.css';

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link
                            className='link'
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={300}>About
                     </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            activeClass='active'
                            to='portfolio'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={300}>Portfolio
                     </Link>
                    </li>
                    <li>
                        <Link
                            className='link'
                            activeClass='active'
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={300}>Contact
                     </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Nav;