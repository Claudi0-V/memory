import React, { useState } from "react";

function Images(props) {
  const { cards, handleClick } = props;

  return cards.map((obj, index) => {
    const { name, src } = obj;
    return (
      <div
        className="cards-div"
        key={index}
        onClick={(event) => handleClick(name)}
      >
        <img src={src} alt={`character ${name}`} />
        <p className="char-name">{name}</p>
      </div>
    );
  });
}

export default Images;
