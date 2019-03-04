import React from 'react';
import './ListItem.css';
import { Link } from 'react-router-dom';

const ListItem = ({ title, className, route }) => (
    <Link to={route}><li className={className}>{title}</li></Link>
);

export default ListItem;