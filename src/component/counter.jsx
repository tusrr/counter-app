

import React, { Component } from 'react';
class Counter extends Component {
    state = { // state contains any data that the component needs
        count : this.props.value,
        // imageURL : "https://picsum.photos/200",
        tags:["tag1","tag2","tag3"]
    };

    // renderTags(){
    //     if(this.state.tags.length ===0) return <p>There are no tags.</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    // }


    // constructor(){
    //     super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }

    // handleIncrement(){
    //     console.log('increment clicked',this);
    handleIncrement = product=>{

        console.log(product);
        this.setState({count: this.state.count+1});


        // console.log('increment clicked',this);
        //this -- obj.method();
        //function();

    };

    // doHandleIncrement = () => {

    //     this.handleIncrement({id:1});

    // };

    render() { 

        console.log('props',this.props);


        return (
        <div>
            {/* {this.props.children} */}
            {/* <h4>Counter#{this.props.id}</h4> */}

            {/* <img  src={this.state.image URL} alt="hi"/> */}
            {/* Inline styling in next line..can be done by referencing the property ('made under the classes) */}

            <span style={{ color: "black",fontWeight: 'bold', fontSize :16 }} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick = { () => this.handleIncrement({id:1})} className='btn btn-secondary btn-sm'>Increment</button>
            {this.state.tags.length === 0 && "Plz Create a new tag!"}
            {/* {this.renderTags()} */}
            
            <button onClick={()=>this.props.onDelete(this.props.id)} class="btn btn-danger btn-sm m-3">Delete</button>
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 text-bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state; // in the count variable , we are picking the count property of this.state
        return count === 0 ? 'Zero' : count; //JSX expressions are compiled to react elements
    }
}
 
export default Counter;