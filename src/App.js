import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Laughing",
  "🙂": "Smiling",
  "🤩": "Excited",
  "✍️": "Writing",
  "👍": "Thumbs Up",
  "": ""
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Emoji not in our database!";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Emoji Interpreter</h1>
      <input
        placeholder="Type an emoji to find its meaning"
        onChange={emojiHandler}
      ></input>
      <div>{meaning}</div>
    </div>
  );
}
