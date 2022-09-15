import React from "react";

const ScoreBoard = ({ currentScore, highScore }) => {
  return (
    <div className="score__board">
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
};

export default ScoreBoard;
