const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

// Get all Pokémon
router.get("/", async (req, res) => {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
});

// Add a Pokémon
router.post("/", async (req, res) => {
    const newPokemon = new Pokemon(req.body);
    await newPokemon.save();
    res.json(newPokemon);
});

module.exports = router;
