import React from "react";

const Character = ({ characterInfo }) => {
  return (
    <div className="character">
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
