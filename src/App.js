import React from "react";
import Pokedex from "./Pokedex";
import pokemonData from "./PokemonData";

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemonData} />
    </div>
  );
}

export default App;
