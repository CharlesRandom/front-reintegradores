import React, { Component } from 'react';
import './App.css';
import Navbar from './components/general/Navbar';
import Home from './components/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
