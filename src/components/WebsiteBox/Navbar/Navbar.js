import React from 'react';
import './Navbar.css';
import logo from '../../../assets/images/logo.svg'
import ListItem from './ListItem/ListItem';

const routes = [
    {
        title: 'Home',
        route: '/'
    },
    {
        title: 'Porfolio',
        route: '/portfolio'
    },
    {
        title: 'What do I know?',
        route: '/what-do-i-know'
    },
    {
        title: 'Contact',
        route: '/contact'
    }
];

const Navbar = () => (
    <div className="navbarbox">
        <img className="navbarbox-img" src={logo} alt="Logotipo branco com formato parecido com gota, referenciando a letra B, de Brito"></img>
        <ul className="navbarbox-ul ulbox">
            {
                routes.map((value) => {
                    return <ListItem className="ulbox-li" route={value.route} key={value.route} title={value.title} />
                })
            }
        </ul>
    </div>
)
export default Navbar;
