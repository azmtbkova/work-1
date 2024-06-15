import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <h1 className="pokemon-name">{pokemon.name}</h1>
        <span className="pokemon-id">#{pokemon.id}</span>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <p>
          <strong>Тип:</strong>{" "}
          {pokemon.types.map((type) => type.type.name).join(", ")}
        </p>
        <p>
          <strong>Способности:</strong>{" "}
          {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </p>
        <p>
          <strong>Рост:</strong> {pokemon.height / 10} м
        </p>
        <p>
          <strong>Вес:</strong> {pokemon.weight / 10} кг
        </p>
      </div>
      <div className="pokemon-stats">
        <h2>Статистика</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
