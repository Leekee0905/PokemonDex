import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";
import { DexContainer } from "../styles/DexStyles";

const Dex = () => {
  const data = MOCK_DATA;
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  return (
    <DexContainer className="dex-container">
      <Dashboard
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonList
        data={data}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </DexContainer>
  );
};

export default Dex;
