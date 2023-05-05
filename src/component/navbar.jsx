import React, { Component } from 'react';

// stateless functional components : in this navbar component, we just have a render method,
// we dont have event handlers, helper methods to calculate values,
// we are getting all the data via props..in this situation we can convert
// this component into stateless functional components.
// shortcut for stateless functional components: sfc
//  just like
// shortcut for class components: cc

const NavBar = ({totalCounters})=>{
  console.log('NavBar-rendered');
  // we cant use lifecycle hooks inside sfc..bcoz here we have 
  // a single fn that returns the o/p of the component..
  // so to use lifecycle hooks, we shud just use class component

return (
  
  <nav className="navbar bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#" style={{ color: "white", fontSize :20 }}> <i>ReactProj- Counters</i>  
   <span className="badge rounded-pill text-bg-secondary">{totalCounters}</span>
  </a>
  </div>
  </nav>
      );
};

export default NavBar ;
 
 //in Class Components, we reference using this.props
//  in fc, we need to add props as fn parameter and then remove this
// React will pass props as argument during runtime 



// object destr --- we here have single references to props object,
// we might have multiple reference , we can use object destructuring





