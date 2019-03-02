import React, { Component } from 'react';
import './Homepage.css';
import programmerdraw from '../../../assets/images/programmer-draw.svg';

class Homepage extends Component {
    render() {
        return (
            <div className="homepagebox">
                <h1 className="homepagebox-h1">Hi, I'm Brito</h1>
                <h2 className="homepagebox-h2">I'm a web developer</h2>
                <img className="homepagebox-img" src={programmerdraw} alt="Desenho de um programador com 6 telas" />
                <button className="homepagebox-button homepagebox-button--primary">Learn more</button>
            </div>
        );
    }
}

export default Homepage;
