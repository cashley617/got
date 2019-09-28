import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className='nav-wrapper'>
                    <span className="left">A girl knows nothing</span>
                    <span className="right">High Score: {this.props.highscore} &nbsp; | &nbsp; Score: {this.props.score}</span>
                </div>
            </nav>
        )
    }
}

export default Nav;