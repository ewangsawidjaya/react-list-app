import React, { Component } from 'react';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import List from './Components/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer/>
        <List addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
