import React from "react";
import { useState } from "react";
import Entity from "./Entity";
import Gameover from "./Gameover";
import Logs from "./Logs";
// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [gameover, setGameover] = useState(false);
  const [isAliveP, setLifeP] = useState(true);
  const [isAliveM, setLifeM] = useState(true);
  const [playerHealth, setHealthP] = useState(100);
  const [monsterHealth, setHealthM] = useState(100);
  const [healing, setHealth] = useState(getRandomValue(10, 20));
  const [attackCounter, setCount] = useState(0);
  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  function applyDMG(newMonsterHealth, newPlayerHealth) {
    setHealthP(newPlayerHealth <= 0 ? 0 : newPlayerHealth);
    setHealthM(newMonsterHealth <= 0 ? 0 : newMonsterHealth);
  }
  function gameState(newMonsterHealth, newPlayerHealth) {
    if (
      newPlayerHealth <= 0 &&
      newMonsterHealth <= 0 &&
      !(isAliveM && isAliveP)
    ) {
      console.log("Draw");
      setLifeM((isAliveM) => false);
      setLifeP((isAliveP) => false);
      setGameover(true);
    } else if (newPlayerHealth <= 0 && isAliveM) {
      console.log("Lose");
      setLifeP((isAliveP) => false);
      setGameover(true);
    } else if (newMonsterHealth <= 0 && isAliveP) {
      console.log("Win");
      setLifeM((isAliveM) => false);
      setGameover(true);
    }
  }
  const attack = () => {
    if (attackCounter < 3) {
      setCount((attackCounter) => attackCounter + 1);
    } else {
      setCount((attackCounter) => 0);
    }

    if (playerHealth <= 0 || monsterHealth <= 0) return;

    const damageToPlayer = getRandomValue(1, 12);
    const damageToMonster = getRandomValue(1, 12);

    const newPlayerHealth = playerHealth - damageToPlayer;
    const newMonsterHealth = monsterHealth - damageToMonster;

    applyDMG(newMonsterHealth, newPlayerHealth);
    gameState(newMonsterHealth, newPlayerHealth);
  };

  const special = () => {
    if (playerHealth <= 0 || monsterHealth <= 0) return;
    if (attackCounter < 3) return;
    setCount((attackCounter) => 0);

    const damageToPlayer = getRandomValue(12, 24);
    const damageToMonster = getRandomValue(12, 24);

    const newPlayerHealth = playerHealth - damageToPlayer;
    const newMonsterHealth = monsterHealth - damageToMonster;

    applyDMG(newMonsterHealth, newPlayerHealth);
    gameState(newMonsterHealth, newPlayerHealth);
  };

  const heal = () => {
    if (playerHealth <= 0 || monsterHealth <= 0) return;

    const healing = getRandomValue(1, 12);
    const damageToPlayer = getRandomValue(1, 12);

    const newMonsterHealth = monsterHealth;
    let newPlayerHealth = playerHealth + healing - damageToPlayer;
    newPlayerHealth = Math.max(0, Math.min(newPlayerHealth, 100));

    gameState(newMonsterHealth, newPlayerHealth);
  };

  const selfKill = (damage) => {
    console.log("killing " + damage);
  };

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <Entity name="Monster" healthWidth={monsterHealth + "%"} />
      <Entity name="Your" healthWidth={playerHealth + "%"} />

      <section id="controls">
        <button onClick={() => attack()}>ATTACK</button>
        <button onClick={() => special(getRandomValue(12, 20))}>
          SPECIAL !
        </button>
        <button onClick={() => heal(getRandomValue(8, 12))}>HEAL</button>
        <button onClick={() => selfKill(100)}>KILL YOURSELF</button>
      </section>

      <Logs />
      <Gameover />
    </>
  );
}

export default Game;
