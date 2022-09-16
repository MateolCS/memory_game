import React from "react";
import { useState } from "react";

const Character = ({ characterInfo, onCharacterClick }) => {
  const [character, setCharacer] = useState(characterInfo.fullName);

  return (
    <div
      className="character"
      onClick={() => {
        onCharacterClick(character);
      }}
    >
      <img
        src={characterInfo.imageUrl}
        alt={characterInfo.name}
        className="character__img"
      />
      <p className="character__name">{`${characterInfo.firstName} ${
        characterInfo.lastName !== "Unknown" ? characterInfo.lastName : ""
      }`}</p>
    </div>
  );
};

export default Character;
