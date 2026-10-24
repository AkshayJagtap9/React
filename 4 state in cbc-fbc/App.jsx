// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//! Day 6


//! state in Class based Component :

import { Component } from "react";

class App extends Component {
// App.state: must be set to an object or null
    state = {
        name: "abc",
        id: 200,
        percentage: 90,
    };

    constructor() {
        super();
        this.state = {
            name: "abc",
            id: 200,
            percentage: 90,
        };
        console.log("constructor");
        console.log(this);
    }
    render() {
        console.log("render");
        console.log(this);
        return (
            <div className="container">
                <h1> App Component </h1>
                <h2> name: {this.state.name} </h2>
                <h2> id: {this.state.id} </h2>
                <h2> percentage: {this.state.percentage} </h2>
            </div>
        );
    }
}

export default App;

// Important: Your code initializes state here and again inside the constructor. 
// You only need one of these approaches.


//! state in Function based Component

// import { useState } from "react";

// var App = () => {
//     let x = useState("javascript");
//     console.log(x);
//     return <h1>hello - {x[0]}</h1>
// };

// export default App;