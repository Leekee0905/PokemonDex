import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("context가 없습니다!");
  }
  return context;
};

export default usePokemon;
