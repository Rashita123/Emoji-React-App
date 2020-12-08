import React, { useState } from "react";
import "./styles.css";

var username = "Rashita";
export default function App() {
  const [onchanger, setonchanger] = useState("");

  function changeHandler(event) {
    // console.log(event.target.value);
    setonchanger(event.target.value);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome</h1>
      <h2 style={{ color: "blue" }}>Hello, {username}! How are you?</h2>
      <input onChange={changeHandler}></input>
      <div>Hello {onchanger}</div>
    </div>
  );
}
