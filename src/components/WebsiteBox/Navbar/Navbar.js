import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../../assets/images/logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="navbarbox">
                <img className="navbarbox-img" src={logo}></img>
                <ul className="navbarbox-ul ulbox">
                    <li className="ulbox-li">Home</li>
                    <li className="ulbox-li">Portfolio</li>
                    <li className="ulbox-li">What do I know?</li>
                    <li className="ulbox-li">Contact</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
