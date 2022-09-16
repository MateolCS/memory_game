import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Characters from "./components/Characters";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScore = () => {
    console.log("should run");
    setCurrentScore(currentScore + 1);
    if (currentScore >= highScore) {
      setHighScore(currentScore + 1);
    }
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  return (
    <div className="App">
      <Header />
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <Characters onScoreChange={updateScore} onMissplay={resetScore} />
      <Footer />
    </div>
  );
}

export default App;
