import React from 'react';
import './Homepage.css';
import programmerdraw from '../../../../assets/images/programmer-draw.svg';
import Button from '../Button/Button';

const Homepage = () => (
    <div className="homepagebox">
        <h1 className="homepagebox-h1">Hi, I'm Brito</h1>
        <h2 className="homepagebox-h2">I'm a web developer</h2>
        <img className="homepagebox-img" src={programmerdraw} alt="Desenho de um programador com 6 telas" />
        <Button route="/portfolio" className="button button--primary" title="Learn more"></Button>
    </div>
)
export default Homepage;
