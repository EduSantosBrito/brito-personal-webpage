import React, { Component } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="websiteblock">
        <Navbar></Navbar>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
