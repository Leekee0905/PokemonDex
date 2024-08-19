import MOCK_DATA from "../data/mock";
import { PokemonListContainer } from "../styles/DexStyles";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const data = MOCK_DATA;
  return (
    <PokemonListContainer>
      {data.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemonData={pokemon} />;
      })}
    </PokemonListContainer>
  );
};

export default PokemonList;
