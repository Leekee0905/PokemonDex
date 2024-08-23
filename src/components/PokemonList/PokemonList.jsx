import MOCK_DATA from "../../data/mock";
import { PokemonListContainer } from "./PokemonListStyle";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = () => {
  const data = MOCK_DATA;
  return (
    <PokemonListContainer className="pokemon-list-container">
      {data.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemonData={pokemon} />;
      })}
    </PokemonListContainer>
  );
};

export default PokemonList;
