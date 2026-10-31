// ! hw task 1:

// Create a Counter Application using a functional component and React's useState() Hook.

// The application should have three buttons:
// 1. Increment: Increase the count by 1 whenever the button is clicked.
// 2. Decrement: Decrease the count by 1 whenever the button is clicked.
// 3. Reset: Reset the count to 0 whenever the button is clicked.
// The initial count should be 0.


import React from "react";
let App = () => {
    let [count, setCount] = React.useState(0);

    let handleClick = (e) => {

        setCount((p) => {
            console.log(p);
            return p + 1;
        });
    };

    let handleClick1 = (e) => {

        setCount((p) => {
            return p - 1;
        });
    };

    let handleReset = (e) => {

        setCount((p) => {
            return p * 0;
        });
              //OR
        // setCount(0);
    };
    return (
        <>
            <h1>count - {count}</h1>
            <button onClick={handleClick}>Increment</button> 
            <button onClick={handleClick1}>decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default App;


//! hw task 2:
// Create a React functional component using the useState() Hook
// To show or hide the text "Hello World" when the user clicks a Toggle Text button.
// Display the text in red color when visible.

/*
import React from "react";

let App = () => {
    let [view, setView] = React.useState(false);

    let toggle = (e) => {
        setView(!view);
    }

    return (
        <>
            <button onClick={toggle}>Toggle text</button>
            {view && <h1 style={{ color: "red" }}>Hello World</h1>}
        </>
    );
}

export default App;

*/

//! hw task 3:
// Create a React functional component using the useState() Hook 
// To change the background color of a webpage between red and blue 
// whenever the user clicks the "Change Color" button.

/*
import React from "react";

let App = () => {
    let [color, setColor] = React.useState("red");

    let colorChange = () => {
        if (color == "red") setColor("blue");
        else setColor("red");
    };

    return (
        <div style={{ background: color, height: "100vh"}}>
            <button onClick={colorChange}>Change Color</button>
        </div>
    );
}

export default App;

*/


//! hw task 4:

// Create a React functional component using the useState() Hook 
// To capture user input from a textbox and display the entered text 
// immediately on the screen using the onChange event.

/*
import React from "react";

let App = () => {
    let [value, setValue] = React.useState("");

    let handleType = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <input onChange={handleType} />
            <h1>{value}</h1>
        </>
    );
}

export default App;

*/
