

import React, { Component } from 'react';
class Counter extends Component {

    componentDidUpdate(prevProps,prevState){
        //  we can compare new state,,old state..or new props, old props and can make ajax call to get new data
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            // Ajax call and get new data from the server
        }

    }


    componentWillUnmount(){
        // This method is called just before when a element is about to be removed/deleted
        // we have new virtual dom- that has 1 less counter--react will compare this with old virtual dom
        // it figures out one counter is removed, then it will call componentwillunmount
        // before removing the counter from teh dom and this it gives  an opportunity
        // to do any kind of cleanup --so if we hv set up timers or listeners , we can remove them before removing the counter otherwise it will endup with memory leaks
        console.log('Counter-Unmount');
    }








    // state = { // state contains any data that the component needs
    //     count : this.props.counter.value,
    //     // imageURL : "https://picsum.photos/200",
    //     tags:["tag1","tag2","tag3"]
    // };

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

    // handleIncrement =() =>{
    //     this.setState({count: this.state.count+1});
    // };

        // console.log('increment clicked',this);
        //this -- obj.method();
        //function();

    

    // doHandleIncrement = () => {

    //     this.handleIncrement({id:1});

    // };

    render() { 
        console.log('Counter-rendered');

        // console.log('props',this.props);


        return (
        <div className="row">
            <div className="col-1">
                <span
                 style={{ color: "black",fontWeight: 'bold', fontSize :16 }} 
            className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            </div>

            <div className="col">
            <button 
            onClick = { () => this.props.onIncrement(this.props.counter)}
                className='btn btn-secondary '>+</button>
            {/* {this.state.tags.length === 0 && "Plz Create a new tag!"} */}
            {/* {this.renderTags()} */}

            <button 
            onClick = { () => this.props.onDecrement(this.props.counter)}
                className='btn btn-secondary  m-2'
                disabled = {this.props.counter.value === 0 ? 'disabled' : ''}

                
                >-</button>
               
            
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger  ">Delete</button>
            </div>

        </div>);

            {/* {this.props.children} */}
            {/* <h4>Counter#{this.props.id}</h4> */}

            {/* <img  src={this.state.image URL} alt="hi"/> */}
            {/* Inline styling in next line..can be done by referencing the property ('made under the classes) */}


    }

    getBadgeClasses() {
        let classes = "badge text-bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
 
    formatCount(){
        const {value} = this.props.counter; // in the count variable , we are picking the count property of this.state
        return value === 0 ? 'Zero' : value; //JSX expressions are compiled to react elements
    }
}
 
export default Counter;