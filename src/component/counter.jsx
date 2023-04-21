

import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        imageURL : "https://picsum.photos/200",
        tags:['tag1','tag2','tag3']
    };

    // renderTags(){
    //     if(this.state.tags.length ===0) return <p>There are no tags.</p>
    // }

  


    render() { 

     



        return (
        <div>
            <img  src={this.state.imageURL} alt="hi"/>
            {/* Inline styling in next line..can be done by referencing the property ('made under the classes) */}
            <span style={{ color: "black",fontWeight: 'bold', fontSize :16 }} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button className='btn btn-secondary btn-sm'>Increment</button>
            
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 text-bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count; //JSX expressions are compiled to react elements
    }
}
 
export default Counter;