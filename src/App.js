import React, { Component } from 'react';
import './App.css';
// import Grid from './components/grid/Grid';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Body'>
          <div className='grid'>
            <div className='gridItem' id='item_1'><p className='text'>1</p></div>
            <div className='gridItem' id='item_2'><p className='text'>2</p></div>
            <div className='gridItem Grid' id='item_3'>
              <div className='gridItem' id='item_4'><p className='text'>4</p></div>
              <div className='gridItem' id='item_5'><p className='text'>5</p></div>
              <div className='gridItem' id='item_6'><p className='text'>6</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
