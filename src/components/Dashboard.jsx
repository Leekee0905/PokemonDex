import {
  DashboardConatiner,
  DashBoardImg,
  DashBoardItem,
  DashBoardItemBox,
  DashBoardTItle,
} from "../styles/DexStyles";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  return (
    <DashboardConatiner className="dashboard-container">
      <DashBoardTItle>나만의 포켓몬</DashBoardTItle>

      <DashBoardItemBox className="dashboard-item-box">
        {selectedPokemon.map((element, index) => {
          return element !== null ? (
            <PokemonCard
              key={index}
              pokemonData={element}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
              isSelect={true}
            />
          ) : (
            <DashBoardItem className="dashboard-item" key={index}>
              <DashBoardImg src="./assets/pokeball.png" />
            </DashBoardItem>
          );
        })}
      </DashBoardItemBox>
    </DashboardConatiner>
  );
};

export default Dashboard;
