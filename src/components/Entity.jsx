import React from "react";
import { useState } from "react";

function Entity({name, healthWidth}) {
  return (
    <>
      <section className="container">
        <h2>{name} Health</h2>
        <div className="healthbar">
          <div className="healthbar__value" style={{ width: healthWidth }}></div>
        </div>
      </section>
    </>
  );
}
export default Entity;
