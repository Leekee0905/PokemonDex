import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexContainer } from "../styles/DexStyles";

const Dex = () => {
  return (
    <DexContainer className="dex-container">
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
};

export default Dex;
