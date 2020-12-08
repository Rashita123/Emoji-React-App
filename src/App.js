import React, { useState } from "react";
import "./styles.css";

var username = "Rashita";
export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  function onClickHandler() {
    // likeCounter++;
    setLikeCounter(likeCounter + 1);
    console.log(likeCounter);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome</h1>
      <h2 style={{ color: "blue" }}>Hello, {username}! How are you?</h2>
      <button onClick={onClickHandler}>Like</button>
      <h3>{likeCounter}</h3>
    </div>
  );
}
