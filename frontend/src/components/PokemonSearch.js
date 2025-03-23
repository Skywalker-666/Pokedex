import React, { useState } from "react";
import axios from "axios";
import "./PokemonSearch.css";  // Import the CSS file

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  const fetchPokemon = async () => {
    if (!searchTerm) return;
    setError(""); // Clear previous errors

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      setPokemon(response.data);
    } catch (err) {
      setError("Pokémon not found! Try again.");
      setPokemon(null);
    }
  };

  return (
    <div className="PokemonSearch">
      <h1>Pokédex</h1>
      <input
        type="text"
        placeholder="Enter Pokémon name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchPokemon()}
      />
      <button onClick={fetchPokemon}>Search</button>

      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div className="pokemon-info">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <table>
            <thead>
              <tr>
                <th>Base Experience</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pokemon.base_experience}</td>
                <td>{pokemon.height}</td>
                <td>{pokemon.weight}</td>
              </tr>
            </tbody>
          </table>

          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>
                {ability.ability.name} {ability.is_hidden ? "(Hidden)" : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
