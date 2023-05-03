import React, { Component } from 'react';
import  Counter  from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
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

       
        return (<div> 

            <button onClick={this.handleReset}
            type="button" className="btn btn-primary  m-3 ">Reset</button>  

            {this.state.counters.map(counter =>(
            <Counter 
            key={counter.id} //used internally by react 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // value={counter.value} 
            // id={counter.id}
            counter={counter}
            />))}
                {/* <h4>counter#{counter.id}</h4>
                </Counter>)} */}
        </div>); 
    }
}
 
export default Counters;