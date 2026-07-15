//! Day 3

// Hello World! basic way to create and render a React element without using JSX.

import React from "react";
import ReactDom from "react-dom/client";

let h1 = React.createElement(
  "h1",
  {id: "head", title: "React JS"},
  "Hello world"
);

console.log(React, ReactDom);
let div = document.querySelector("#root");
let root = ReactDom.createRoot(div);

root.render(h1);