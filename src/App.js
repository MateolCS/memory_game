import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Characters from "./components/Characters";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <ScoreBoard currentScore={currentScore} />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
