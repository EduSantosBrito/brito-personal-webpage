import React, { Component } from 'react';
import './Footer.css';
import Facebook from '../../assets/images/facebook.svg';
import Github from '../../assets/images/github.svg';
import Twitter from '../../assets/images/twitter.svg';
class Footer extends Component {
    render() {
        return (
            <div className="footerbox">
                <h1 className="footerbox-h1">Made with <span role="img" aria-label="Um Coração">❤️</span> by Brito</h1>
                <div className="socialbox">
                    <img className="socialbox-img" src={Facebook} alt="ícone do Facebook"></img>
                    <img className="socialbox-img" src={Github} alt="ícone do Github"></img>
                    <img className="socialbox-img" src={Twitter} alt="ícone do Twitter"></img>
                </div>
            </div>
        );
    }
}

export default Footer;
