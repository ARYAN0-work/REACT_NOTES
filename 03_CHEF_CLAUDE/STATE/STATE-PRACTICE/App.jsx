/*
let hiddenState = 0;

const count = hiddenState; // 0

function setCount(value) {
    hiddenState = value;
    renderAgain();
}
*/

import React from "react";

export default function App() {
 
    const [count,setCount] = React.useState(0) // this will display 0

    function add() {
        setCount(count +1) //this will increment
    } // if you do this count ++ you have to do in line 5 let [count,setCount] also never do this count = count +1 and also read the difrrence between these 3 count + 1, count ++, count = count+1

    function subtract() {
        setCount(prevCount=>prevCount-1)
    }
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>

      <div className="counter">
        <button className="minus"   onClick ={subtract}aria-label="Decrease count">
          -
        </button>

        <h2 className="count">{count}</h2>

        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}
