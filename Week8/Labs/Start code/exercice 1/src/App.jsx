import React from "react";

export default function App() {
  const [score, setScore] = React.useState("");

  const handleChange = (event) => {
    let value = Number(event.target.value);

    if (value > 10) value = 10;
    if (value < 0) value = 0;

    setScore(value);
  };

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score < 3) {
      scoreColor = "#a73434";
    } else if (score < 7) {
      scoreColor = "#ce9825";
    } else {
      scoreColor = "#5eec9e";
    }
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score}
          onChange={handleChange}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
