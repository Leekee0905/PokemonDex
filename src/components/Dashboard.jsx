import {
  DashboardConatiner,
  DashBoardImg,
  DashBoardItem,
  DashBoardItemBox,
  DashBoardTItle,
} from "../styles/DexStyles";
import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";

const Dashboard = () => {
  const { selectedPokemon } = usePokemon();
  return (
    <DashboardConatiner className="dashboard-container">
      <DashBoardTItle>나만의 포켓몬</DashBoardTItle>

      <DashBoardItemBox className="dashboard-item-box">
        {selectedPokemon.map((element, index) => {
          return element !== null ? (
            <PokemonCard key={index} pokemonData={element} isSelect={true} />
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
