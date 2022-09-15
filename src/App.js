import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Characters from "./components/Characters";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [data, setData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    const endpoint = `https://thronesapi.com/api/v2/Characters/`;

    const getCharacters = async () => {
      const randomIds = new Set();
      while (randomIds.size < 12) {
        randomIds.add(Math.floor(Math.random() * 52) + 1);
      }

      const characterPromises = [...randomIds].map((id) =>
        fetch(`${endpoint}${id}`)
      );

      const resposnes = await Promise.all(characterPromises);

      setData(await Promise.all(resposnes.map((res) => res.json())));
    };

    getCharacters();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Header />
      <ScoreBoard currentScore={currentScore} />
      <Characters characters={data} />
      <Footer />
    </div>
  );
}

export default App;
