import React from "react";

export default function App() {
  let [isImportant, setIsImportant] = React.useState("Yes");

  setIsImportant("Heck yes!");

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{isImportant}</button>
    </main>
  );
}

/*
Note=>

Calling setIsImportant("Heck yes!") directly inside the component body causes a state update on every render. Each state update triggers another render, which calls setIsImportant() again, creating an infinite re-render loop. React detects this and throws the "Too many re-renders" error to stop the application.
*/

/*  CONSOLE OUTPUT =>
Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

An error occurred in the <App> component. Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.
*/