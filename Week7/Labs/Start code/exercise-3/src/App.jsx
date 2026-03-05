import React from "react";
import { useState } from "react";
import "./index.css"

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");
  /* You will need some function to handle the key pressed and button events */
  function onA(e) {
    setA(e.target.value);
  }

  function onB(e) {
    setB(e.target.value);
  }

  function compute() {
    if(a === "" || b === "" || isNaN(Number(a)) || isNaN(Number(b))) {
      setResult("Please enter valid numbers");
      setError(true);
    } else {
      setResult(Number(a) + Number(b));
      setError(false);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={error? "error" : ""} />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
