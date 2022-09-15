import React from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
  return (
    <div className="characters__container">
      {characters.map((character) => {
        return <Character characterInfo={character} key={character.id} />;
      })}
    </div>
  );
};

export default Characters;
