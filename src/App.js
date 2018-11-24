import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import PermanentDrawer from './components/PermanentDrawer/PermanentDrawer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <PermanentDrawer/>
       
      </div>
    );
  }
}

export default App;
