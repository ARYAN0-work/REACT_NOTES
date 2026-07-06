import React from "react";

export default function App() {
  let [isImportant, setIsImportant] = React.useState("Yes");

  /**
   * Challenge:
   * 1. Create a function called `handleClick` that runs
   *    setIsImportant("Definitely")
   *
   * 2. Add a click event listener to the button
   *    that runs `handleClick` when the button is clicked.
   */

  function hanldeClick() {
    setIsImportant("Definitly")
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={hanldeClick} className="value">{isImportant}</button>
    </main>
  );
}

// now on clicking the btn the value change from yes to Heck yes