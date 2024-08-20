import Dashboard from "../../components/Dashboard/Dashboard";
import PokemonList from "../../components/PokemonList/PokemonList";
import { DexContainer } from "./DexStyles";

const Dex = () => {
  return (
    <DexContainer className="dex-container">
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
};

export default Dex;
