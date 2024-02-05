import express from "express";

import Pokemon from "../../../models/Pokemon.js";

const pokemonRouter = new express.Router();

pokemonRouter.get("/", async (req, res) => {
  try {
    const pokemon = await Pokemon.query().orderBy("pokeApiId");
    return res.status(200).json({ pokemon });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default pokemonRouter;
