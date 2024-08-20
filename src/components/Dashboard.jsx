import {
  DashboardConatiner,
  DashBoardImg,
  DashBoardItem,
  DashBoardItemBox,
  DashBoardTItle,
} from "../styles/DexStyles";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const pokemons = useSelector((state) => state.pokemon.selectedPokemon);
  return (
    <DashboardConatiner className="dashboard-container">
      <DashBoardTItle className="dashboard-title">나만의 포켓몬</DashBoardTItle>

      <DashBoardItemBox className="dashboard-item-box">
        {pokemons.map((element, index) => {
          return element !== null ? (
            <PokemonCard
              className="selected-pokemon-card"
              key={index}
              pokemonData={element}
              isSelect={true}
            />
          ) : (
            <DashBoardItem className="dashboard-item" key={index}>
              <DashBoardImg
                className="dashboard-pokemon-ball"
                src="./assets/pokeball.png"
              />
            </DashBoardItem>
          );
        })}
      </DashBoardItemBox>
    </DashboardConatiner>
  );
};

export default Dashboard;
