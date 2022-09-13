import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const endpoint = `https://thronesapi.com/api/v2/Characters/`;

    const getCharacters = async () => {
      const randomIds = new Set();
      while (randomIds.size < 16) {
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

  return <div className="App"></div>;
}

export default App;
