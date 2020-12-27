import React, { useState } from "react";
import { calculateChar } from "./utils";
export default function MainPage() {
  const [char, changeChar] = React.useState("");
  const [newChar, setNewChar] = React.useState("");

  const calculateNew = () => {
    var m = calculateChar(char);
    setNewChar(m);
  };

  return (
    <div>
      <input
        style={{ margin: 60 }}
        type="text"
        aria-label="Type your letter"
        name="Write here"
        onChange={(e) => {
          changeChar(e.target.value);
        }}
      />
      <button onClick={calculateNew}>Click Here</button>

      <p style={{ margin: 60 }}>{newChar}</p>
    </div>
  );
}
