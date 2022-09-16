import React from "react";
import Character from "./Character";
import { useEffect, useState } from "react";
const Characters = ({ onScoreChange, onMissplay }) => {
  const [heroes, setHeroes] = useState([]);
  const [clickedHeroes, setClickedHeroes] = useState([]);

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

      setHeroes(await Promise.all(resposnes.map((res) => res.json())));
    };

    getCharacters();
  }, []);

  const shuffle = () => {
    setHeroes(heroes.sort(() => Math.random() - 0.5));
  };

  const addClickedHero = (heroName) => {
    if (clickedHeroes.includes(heroName)) {
      setClickedHeroes([]);
      shuffle();
      onMissplay();
      console.log("You lost!");
      return;
    }

    setClickedHeroes([...clickedHeroes, heroName]);
    shuffle();
    onScoreChange();
  };

  return (
    <div className="characters__container">
      {heroes.map((hero) => {
        return (
          <Character
            characterInfo={hero}
            key={hero.id}
            onCharacterClick={addClickedHero}
          />
        );
      })}
    </div>
  );
};

export default Characters;
