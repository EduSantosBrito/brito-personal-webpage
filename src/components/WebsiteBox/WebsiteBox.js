import React from 'react';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './WebsiteBox.css';

const WebsiteBox = () => {
    return (
        <div className="websitebox">
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}
export default WebsiteBox;