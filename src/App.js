import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <News />
      </div>
    );
  }
}
