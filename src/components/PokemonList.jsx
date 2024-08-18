import { PokemonListContainer } from "../styles/DexStyles";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ data, selectedPokemon, setSelectedPokemon }) => {
  return (
    <PokemonListContainer>
      {data.map((e) => {
        return (
          <PokemonCard
            key={e.id}
            pokemonData={e}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        );
      })}
    </PokemonListContainer>
  );
};

export default PokemonList;
