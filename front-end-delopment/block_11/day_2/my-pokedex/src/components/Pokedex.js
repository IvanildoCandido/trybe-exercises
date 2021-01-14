import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
          {data.map((pokemon) => (
            <Pokemon
              name={pokemon.name}
              type={pokemon.type}
              value={pokemon.averageWeight.value}
              unit={pokemon.averageWeight.measurementUnit}
              image={pokemon.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
