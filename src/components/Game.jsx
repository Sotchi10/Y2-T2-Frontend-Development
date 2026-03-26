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
    value: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    value: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [gameover, setGameover] = useState(false);
  const [playerHealth, setHealthP] = useState(100);
  const [monsterHealth, setHealthM] = useState(100);
  const [healing, setHealth] = useState(getRandomValue(10, 20));
  const [attackCounter, setCount] = useState(0);
  const [logs, setLogs] = React.useState([]);
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
      newMonsterHealth <= 0
    ) {
      console.log("Draw");
      setGameover(true);
    } else if (newPlayerHealth <= 0) {
      console.log("Lose");
      setGameover(true);
    } else if (newMonsterHealth <= 0) {
      console.log("Win");
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
    setLogs((prev) => [
      ...prev,
      createLogAttack(false, damageToMonster), // player hits monster
      createLogAttack(true, damageToPlayer), // monster hits player
    ]);
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
    setLogs((prev) => [
      ...prev,
      { isPlayer: true, text: ` used SPECIAL for ${damageToMonster}` },
      createLogAttack(true, damageToPlayer),
    ]);
  };

  const heal = () => {
    if (playerHealth <= 0 || monsterHealth <= 0) return;

    const healing = getRandomValue(1, 12);
    const damageToPlayer = getRandomValue(1, 12);

    const newMonsterHealth = monsterHealth;
    let newPlayerHealth = playerHealth + healing - damageToPlayer;
    newPlayerHealth = Math.max(0, Math.min(newPlayerHealth, 100));

    applyDMG(monsterHealth, newPlayerHealth);
    gameState(newMonsterHealth, newPlayerHealth);
    setLogs((prev) => [
      ...prev,
      createLogHeal(healing),
      createLogAttack(true, damageToPlayer),
    ]);
  };

  const selfKill = (damage) => {
    const damageToPlayer = 100;
    const damageToMonster = 0;

    const newPlayerHealth = playerHealth - damageToPlayer;
    const newMonsterHealth = monsterHealth - damageToMonster;

    applyDMG(newMonsterHealth, newPlayerHealth);
    gameState(newMonsterHealth, newPlayerHealth);
    setLogs((prev) => [
      ...prev,
      { isPlayer: true, text: ` killed self for ${damageToPlayer}` },
      createLogAttack(true, damageToPlayer),
    ]);
    setGameover(true);
  };

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function restartGame() {
    setHealthM(100);
    setHealthP(100);
    setLogs([]);
    setCount(0);
    setGameover(false);
    setLifeM(true);
    setLifeP(true);
  }
  function showGameResult() {
    if (!gameover) {
      return null;
    }

    let title = "You lost!";
    if (playerHealth === 0 && monsterHealth === 0) {
      title = "It's a draw!";
    } else if (monsterHealth === 0) {
      title = "You won!";
    }

    return <Gameover title={title} restartGame={restartGame} />;
  }

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <Entity name="Monster" healthWidth={monsterHealth + "%"} />
      <Entity name="Your" healthWidth={playerHealth + "%"} />

      {showGameResult()}
      <section id="controls">
        <button onClick={() => attack()}>ATTACK</button>
        <button
          style={{ backgroundColor: attackCounter < 3 ? "grey" : "" }}
          onClick={() => special()}
        >
          SPECIAL !
        </button>
        <button onClick={() => heal(getRandomValue(8, 12))}>HEAL</button>
        <button onClick={() => selfKill(100)}>KILL YOURSELF</button>
      </section>

      <Logs logs={logs} />
    </>
  );
}

export default Game;
