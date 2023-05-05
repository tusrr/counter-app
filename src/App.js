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
// 1st Lifecycle hook
constructor(props){
  super(props);
  console.log('App-Constructor',this.props);
  // this.state= this.state.something -- if u need to change the state, u can do it directly, we dont call,,
  // this.setState()--(will throw error) bcoz it is used when a component is rendered and placed in dom 
}
// 2nd Lifecycle hook

 componentDidMount(){
  // This method is called when a component is rendered into dom.
  //AJAX CALL: This method is used to get data from the server and pass this list to [this.setState({movies})] for vidly
  console.log('App- mounted');
 }

 handleIncrement = counter =>{
    const counters= [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({counters});
 }
 handleDecrement = counter =>{
    const counters= [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
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
//  3rd lifecycle hook
  render() { 
    console.log('App-rendered');
    return (

      <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value>0).length}/>
      <main className ='container'>
        <Counters 
        counters={this.state.counters}
        onReset ={this.handleReset}
        onIncrement ={this.handleIncrement}
        onDecrement ={this.handleDecrement}
        onDelete ={this.handleDelete}
        />
      </main>
    </React.Fragment>
    );
  }
}
 
export default App;

// UPdate--- >When the state or props of component changes, this will schedule a call to the
// render() method, so our app is going to be rendered
// which means all its children are also going to be rendered

// when an entire component tree is rendered, that doesnt mean entire dom is updated
// we basically get the react element, that is updating the virtual dom
// react will then look at virtual dom, it also has the copy of old virtual dom
// thats why .. we shudnt update the state directly
// so we can have two object references in memory---old virtual dom, new virtual dom
// then react will figure out what is changed,
//  and based on that, it will update the real dom accordingly.