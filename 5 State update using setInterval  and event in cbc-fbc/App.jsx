// Update State Value in Class Based Component
/*
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  render(){
    console.log("render");
    window.setInterval(() => {
    this.setState({ count: this.state.count + 1});
  }, 2000);
  return (
    <div className="container">
      <h1>Count - {this.state.count}</h1>
    </div>
  );
  }
}

export default App;
*/



// Update State Value in Function Based Component
/*
import React from "react";
import { useState } from "react";

let App = () => {
  let [count, setCount] = React.useState(0);
  setInterval(() => {
    setCount(count + 1);
  }, 2000);
  return (
    <div className="coutainer">
      <h1>count - {count}</h1>
    </div>
  );
};

export default App;
*/

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// How to handle the events: 
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


// class based component
/*
import React from "react";
import {Component} from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  handleClick = (e) => {
    console.log("clicked");
    this.setState((p) => {
      console.log(p);
      return { count: p.count + 1};      
    });    
  };

  render() {
    return (
      <>
        <h1 id="head">count - {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </>
    );
  }
}

export default App;
*/


// In Functin based component


import React, {useState} from "react";

function App() {
  let [count, setCount] = useState(0);

  let handleClick = (e) => {

    console.log(e);

    setCount(count + 1);
    setCount(count + 1);
  

    setCount((p) => {
      console.log(p);
      return p + 1;
    });

    setCount((p) => {
      console.log(p);
      return p + 1;    
    });

  };

  return(
    <>
      <h1> count - {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );

};

export default App

