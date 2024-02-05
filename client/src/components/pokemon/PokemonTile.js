import React from "react";

const PokemonTile = ({ name, image, types, pokeApiId }) => {
  return (
    <div className="cell small-6 medium-4 large-3 callout text-center box-border">
      <img src={image} alt={name} />
      <p># {pokeApiId}</p>
      <h3 className="capitalize-text">{name}</h3>
      <p>{types}</p>
    </div>
  );
};

export default PokemonTile;
