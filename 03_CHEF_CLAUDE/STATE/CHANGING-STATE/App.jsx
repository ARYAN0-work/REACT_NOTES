import React from "react";

export default function App() {
  let [isImportant, func] = React.useState("Yes");

  isImportant = "Heck yes!";
// the valuw will chaneg to heck yes but we need for button click
  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{isImportant}</button>
    </main>
  );
}