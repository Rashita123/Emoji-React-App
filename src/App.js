import React from "react";
import "./styles.css";

var username = "Rashita";
export default function App() {
  function onClickHandler() {
    console.log("Clickedd!");
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome</h1>
      <h2 style={{ color: "blue" }}>Hello, {username}! How are you?</h2>
      <button onClick={onClickHandler}>Like</button>
    </div>
  );
}
