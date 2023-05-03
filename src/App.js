import React, { Component } from 'react';
import './App.css';
import Counters from './component/counters';
import NavBar from './component/navbar';



class App extends Component {
  state = {  } 
  render() { 
    return (

      <React.Fragment>
      <NavBar/>
      <main className='container'>
        <Counters/>
      </main>
    </React.Fragment>
    );
  }
}
 
export default App;

