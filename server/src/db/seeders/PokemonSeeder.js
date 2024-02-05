import PokeApiClient from "../../apiClient/PokeApiClient.js";
import PokeApiSerializer from "../../serializers/PokeApiSerializer.js";

import Pokemon from "../../models/Pokemon.js";

class PokemonSeeder {
  static async getPokemonData() {
    const { results: pokemonData } = await PokeApiClient.getPokemon({
      baseUrl: "https://pokeapi.co/api/v2/pokemon",
      limit: 150,
    });

    return Promise.all(
      pokemonData.map(async (pokemon) =>
        PokeApiClient.getPokemonDetails({ pokemonIdUrl: pokemon.url }),
      ),
    );
  }

  static async serializePokemon({ pokemonDetails }) {
    return pokemonDetails.map((pokemon) => PokeApiSerializer.getDetails({ pokemon }));
  }

  static async seed() {
    const pokemonDetails = await this.getPokemonData();
    const serializedPokemonDetails = await this.serializePokemon({ pokemonDetails });

    await Promise.all(
      serializedPokemonDetails.map(async (pokemon) => {
        const foundPokemon = await Pokemon.query().findOne({ pokeApiId: pokemon.pokeApiId });
        if (!foundPokemon) {
          await Pokemon.query().insert(pokemon);
        }
      }),
    );
  }
}

export default PokemonSeeder;
