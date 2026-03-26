import React from "react";
import { useState } from "react";
function Logs() {
  return (
    <>
      <section id="log" className="container">
        <h2>Battle Log</h2>
        <ul>
          <li>
            <span>Player</span>
            <span>
              {" "}
              heals for <span className="log--heal">12</span>
            </span>
          </li>
          <li>
            <span>Monster</span>
            <span>
              {" "}
              attaked for <span className="log--damage">45</span>
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Logs;
