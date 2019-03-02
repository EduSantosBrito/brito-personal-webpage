import React, { Component } from 'react';
import './Content.css';
import Homepage from './Homepage/Homepage';

class Content extends Component {
    render() {
        return (
            <div className="contentbox">
                <Homepage></Homepage>
            </div>
        );
    }
}
export default Content;
