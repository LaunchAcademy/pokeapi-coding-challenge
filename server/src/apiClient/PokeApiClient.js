import got from "got";

class PokeApiClient {
  static parsePokemonResponse(response) {
    return JSON.parse(response.body);
  }

  static async getPokemon({ baseUrl, limit = 20 }) {
    const response = await got(`${baseUrl}?limit=${limit}`);
    return this.parsePokemonResponse(response);
  }

  static async getPokemonDetails({ pokemonIdUrl }) {
    const response = await got(pokemonIdUrl);
    return this.parsePokemonResponse(response);
  }
}

export default PokeApiClient;
