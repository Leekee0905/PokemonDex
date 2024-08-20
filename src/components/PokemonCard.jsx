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
import {
  addPokemon,
  clearError,
  deletePokemon,
} from "../redux/modules/pokemon";
import store from "../redux/config/configStore";
import Swal from "sweetalert2";

const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(addPokemon(pokemonData));
    const state = store.getState();
    const error = state.pokemon.addPokemonError;
    if (error) {
      Swal.fire({
        title: "Warning!",
        text: error,
        icon: "warning",
        confirmButtonText: "확인",
      }).then(() => dispatch(clearError()));
    }
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
