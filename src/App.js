import React, { Component } from 'react';
import './App.css';
import WebsiteBox from './components/WebsiteBox/WebsiteBox';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <WebsiteBox></WebsiteBox>
      </BrowserRouter>
    );
  }
}

export default App;
