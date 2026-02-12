import React from "react";
import { useState } from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_RIEL_RATIO = 4100;

  // State
  const [valueDollars, setValueDollars] = useState(15);

  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * DOLLAR_TO_EURO_RATIO;
  }

  // Convert the given value in dollars to a value in dong
  function dollarToRiel(valueInDollars) {
    return valueInDollars * DOLLAR_TO_RIEL_RATIO;
  }
  function increasePrice() {
    // TODO Update the value in dollars by increasing it by 5
  }
  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        <label>Value in Riel</label>
        <input disabled value={dollarToRiel(valueDollars)} />

        <label>Value in Euro</label>
        <input disabled value={dollarToEuro(valueDollars)} />
        {/* TODO */}
        <button>Increase Price + 5</button>

      </p>
    </main>
  );
}

export default App;
