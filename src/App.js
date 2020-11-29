import React, { Component } from 'react';
import './App.css';
import  Logo  from './assets/joker.png';
import Card from './components/card';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container-fluid'>
        <div className='row'>
          <img className='mx-auto mt-5' src={Logo} alt='logo' />
        </div>
        <div className='row'>
          <h1 className='mx-auto mt-2'>Laugh With Comedian</h1>
        </div>
        <div className='row'>
          <Card />
        </div>
        <div className='row'>
          <button className='btn btn-warning mx-auto'>Next</button>
        </div>
      </div>
     );
  }
}
 
export default App;