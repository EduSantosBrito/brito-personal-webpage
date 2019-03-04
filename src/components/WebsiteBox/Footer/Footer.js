import React from 'react';
import './Footer.css';
import Facebook from '../../../assets/images/facebook.svg';
import Github from '../../../assets/images/github.svg';
import Twitter from '../../../assets/images/twitter.svg';

const Footer = () => (
    <div className="footerbox">
        <h1 className="footerbox-h1">Made with <span className="footerbox-span" role="img" aria-label="Um Coração">❤️</span> by Brito</h1>
        <div className="socialbox">
            <img className="socialbox-img" id="facebook" src={Facebook} alt="ícone do Facebook"></img>
            <img className="socialbox-img" id="github" src={Github} alt="ícone do Github"></img>
            <img className="socialbox-img" id="twitter" src={Twitter} alt="ícone do Twitter"></img>
        </div>
    </div>
)
export default Footer;
