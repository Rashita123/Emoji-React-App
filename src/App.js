import React from "react";
import "./styles.css";

var username=prompt("Tell me your name");
export default function App() {
  return (
    <div className="App">
      <h1 style={{color: "red"}}>Welcome</h1>
      <h2 style={{color: "blue"}}>Hello, {username}! How are you?</h2>
    </div>
  );
}
