import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { DexContainer } from "../styles/DexStyles";
import { PokemonProvider } from "../context/PokemonContext";

const Dex = () => {
  return (
    <DexContainer className="dex-container">
      <PokemonProvider>
        <Dashboard />
        <PokemonList />
      </PokemonProvider>
    </DexContainer>
  );
};

export default Dex;
