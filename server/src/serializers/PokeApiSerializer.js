class PokeApiSerializer {
  static getDetails({ pokemon }) {
    const { name } = pokemon;
    const image = pokemon.sprites.front_default;
    const pokeApiId = pokemon.id;
    const types = pokemon.types.map((type) => type.type.name).join(", ");
    return { name, image, pokeApiId, types };
  }
}

export default PokeApiSerializer;
