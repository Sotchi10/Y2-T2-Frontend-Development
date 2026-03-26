import React from "react";
import { useState } from "react";

function Gameover({ title, restartGame }) {
  return (
    <>
      <section className="container">
        <h2>Game Over!</h2>
        <h3>{title}</h3>
        <button onClick={restartGame}>Start New Game</button>
      </section>
    </>
  );
}
export default Gameover;
