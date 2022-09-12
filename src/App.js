import React from "react";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const endpoint = `https://thronesapi.com/api/v2/Characters/`;

    const getCharacters = async () => {
      const randomIds = new Set();
      while (randomIds.size < 6) {
        randomIds.add(Math.floor(Math.random() * 52) + 1);
      }
      const fetchedCharacters = await Promise.all(
        [...randomIds].map((id) =>
          fetch(`${endpoint}${id}`).then((res) => res.json())
        )
      );
    };

    getCharacters();
  }, []);

  return <div className="App"></div>;
}

export default App;
