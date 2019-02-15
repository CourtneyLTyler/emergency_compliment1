import React, { Component } from 'react';
import Compliments from "./Compliments";
import './App.css';
import Hello from './Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Hello />
        <Compliments/>
      </div>
    );
  }
}

export default App;
