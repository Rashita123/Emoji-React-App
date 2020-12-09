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

const emojis = Object.keys(emojiDictionary);
console.log(emojis);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Emoji not in our database!";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Emoji Interpreter</h1>
      <input
        placeholder="Type an emoji to find its meaning"
        onChange={emojiHandler}
      ></input>
      <div style={{ fontSize: "2rem" }}>{meaning}</div>
      {emojis.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => clickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
