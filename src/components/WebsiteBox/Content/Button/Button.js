import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ title, className, route }) => (
    <Link to={route}><button className={className}>{title}</button></Link>
);

export default Button;