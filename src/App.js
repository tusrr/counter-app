import React, { Component } from 'react';
import './App.css';
import Counters from './component/counters';
import NavBar from './component/navbar';



class App extends Component {
  state = { 
    counters:[
        {id:1,value:4},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
       
    ]
 } 

 handleIncrement = counter =>{
    const counters= [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({counters});
 }

 handleReset = () =>{
    const counters = this.state.counters.map(c=>{
        c.value = 0;
        return c;  
    });
// changed state..but not observed on dom--bcoz-- we are updating the value property 
// based on what we get from our props -- this is executed 
// only once when an instance of counter component is created
    this.setState({counters});
 };

 handleDelete= (counterId)=>{
    // console.log('Event Handler called',counterId);
    const counters = this.state.counters.filter(c=>c.id !== counterId);
    this.setState({counters});
 };
  render() { 
    return (

      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value>0).length}/>
      <main className='container'>
        <Counters 
        counters={this.state.counters}
        onReset ={this.handleReset}
        onIncrement ={this.handleIncrement}
        onDelete ={this.handleDelete}
        />
      </main>
    </React.Fragment>
    );
  }
}
 
export default App;

