import React, { Component } from 'react';
import  Counter  from './counter';

class Counters extends Component {
   

    render() { 

        const {onReset,counters,onDelete,onIncrement} = this.props;

        return (<div> 

            <button onClick={onReset}
            type="button" className="btn btn-primary  m-3 ">Reset</button>  

            {counters.map(counter =>(
            <Counter 
            key={counter.id} //used internally by react 
            onDelete={onDelete}
            onIncrement={onIncrement}
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

// here also we have several references to this.props
// we can use object destr. to pick the properties of 
// prop obj that we are interested in
// so in render method --we do  it
