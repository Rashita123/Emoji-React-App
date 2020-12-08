import React from "react";
import "./styles.css";

var username = "Rashita";
var likeCount = 0;
export default function App() {
  function onClickHandler() {
    likeCount++;

    console.log(likeCount);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome</h1>
      <h2 style={{ color: "blue" }}>Hello, {username}! How are you?</h2>
      <button onClick={onClickHandler}>Like</button>
      <h3>{likeCount}</h3>
    </div>
  );
}
