import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardInfo,
  CardPokeId,
  CardPokeName,
} from "./PokemonCardStyle";
import StyledButton from "../../styles/StyledButton";
import usePokemon from "../../hooks/usePokemon";

const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const { addPokemonToTeam, deletePokemonFromTeam } = usePokemon();

  const convertPokemonId = (id) => {
    return id.toString().padStart(3, "0");
  };

  const navigateToDetail = () => {
    navigate(`/pokemon-detail/${pokemonData.id}`);
  };

  return (
    <Card className="pokemon-card" onClick={() => navigateToDetail()}>
      <CardImg className="pokemon-img" src={pokemonData.img_url} />
      <CardInfo className="pokemon-info">
        <CardPokeName className="pokemon-name">
          {pokemonData.korean_name}
        </CardPokeName>
        <CardPokeId className="pokemon-id">
          No. {convertPokemonId(pokemonData.id)}
        </CardPokeId>
      </CardInfo>
      <StyledButton
        className="pokemon-button"
        width="45px"
        height="20px"
        fontSize="16px"
        onClick={(e) => {
          e.stopPropagation();
          isSelect
            ? deletePokemonFromTeam(pokemonData.id)
            : addPokemonToTeam(pokemonData);
        }}
      >
        {isSelect ? "삭제" : "추가"}
      </StyledButton>
    </Card>
  );
};

export default PokemonCard;
