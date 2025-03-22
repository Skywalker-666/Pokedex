const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
    name: String,
    type: [String],
    imageUrl: String,
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
