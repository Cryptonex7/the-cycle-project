import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Router from './Router';
import "./palette.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Router/>
      </div>
    );
  }
}

export default App;
