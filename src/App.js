import React, { Component } from 'react';
import './App.css';
import Navbar from './components/general/Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
