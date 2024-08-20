import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardInfo,
  CardPokeId,
  CardPokeName,
} from "../styles/DexStyles";
import StyledButton from "../styles/StyledButton";
import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/modules/pokemon";

const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(addPokemon(pokemonData));
  };

  const handleDeleteButton = (id) => {
    dispatch(deletePokemon(id));
  };

  const convertPokemonId = (id) => {
    return id.toString().padStart(3, "0");
  };

  const navigateToDetail = () => {
    navigate(`/pokemon-detail/${pokemonData.id}`);
  };

  return (
    <Card onClick={() => navigateToDetail()}>
      <CardImg src={pokemonData.img_url} />
      <CardInfo>
        <CardPokeName>{pokemonData.korean_name}</CardPokeName>
        <CardPokeId>No. {convertPokemonId(pokemonData.id)}</CardPokeId>
      </CardInfo>
      <StyledButton
        width="45px"
        height="20px"
        fontSize="16px"
        onClick={(e) => {
          e.stopPropagation();
          isSelect ? handleDeleteButton(pokemonData.id) : handleAddButton();
        }}
      >
        {isSelect ? "삭제" : "추가"}
      </StyledButton>
    </Card>
  );
};

export default PokemonCard;
