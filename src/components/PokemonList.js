import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const results = response.data.results;
        const pokemonDataRequests = results.map((result) =>
          axios.get(result.url)
        );
        const pokemonDataResponses = await Promise.all(pokemonDataRequests);
        const pokemonData = pokemonDataResponses.map((res) => res.data);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
