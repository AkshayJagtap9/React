// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



//! Day 3
// Hello World! basic way to create and render a React element without using JSX.


// import React from "react";
// import ReactDom from "react-dom/client";

// let h1 = React.createElement(
//   "h1",
//   {id: "head", title: "React JS"},
//   "Hello world"
// );

// console.log(React, ReactDom);
// let div = document.querySelector("#root");
// let root = ReactDom.createRoot(div);

// root.render(h1);




///// Day 4
import React from "react";
import ReactDOM from "react-dom/client";


let form1 = React.createElement(
  "form",
  { className: "form-control" },
  React.createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter Username",
  }),
  React.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Enter Password",
  }),
  React.createElement("button", {
    type: "submit" }, 
    "Submit")
);

console.log(React, ReactDOM);

let div = document.querySelector("#root");
let root = ReactDOM.createRoot(div);

let h1 = <h1 id="head">Hello World</h1>;


let form2 = (
  <>
    <h1>Log In</h1>
    <form>
      <label htmlFor="username">username: </label>      
      <input name="username"
        type="text"
        id="username"
        placeholder="username"
      />    
      <br />  
      <label htmlFor="password">password: </label>
      <input type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <br />
      <button type="submit"
        className="btn">
        submit
      </button>
    </form>
  </>
);

let j = "javascript";
let h2 = (
  <h1>
    sum of 100 and 100 is {100 + 100} {j}
  </h1>
);

// root.render(form1);
      //OR Rendor all element

root.render(
  <>
    {h1}
    {form1}
    {form2}
    {h2}
  </>
);
