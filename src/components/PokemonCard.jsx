import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardInfo,
  CardPokeId,
  CardPokeName,
} from "../styles/DexStyles";
import StyledButton from "../styles/StyledButton";
import usePokemon from "../hooks/usePokemon";

const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const { selectedPokemon, setSelectedPokemon } = usePokemon();

  const handleAddButton = () => {
    const dataLength = selectedPokemon.filter((e) => e !== null).length;
    if (dataLength >= 6) {
      alert("선택할 수 있는 포켓몬 수를 넘었습니다.");
      return;
    }
    if (selectedPokemon.includes(pokemonData)) {
      alert("이미 선택한 포켓몬입니다.");
      return;
    }
    const newArr = [...selectedPokemon];
    const nullIndex = newArr.indexOf(null);
    if (nullIndex !== -1) {
      newArr[nullIndex] = pokemonData;
    }
    setSelectedPokemon(newArr);
  };

  const handleDeleteButton = (id) => {
    const filteredData = selectedPokemon.filter(
      (e) => e !== null && e.id !== id
    );

    while (filteredData.length < selectedPokemon.length) {
      filteredData.push(null);
    }
    setSelectedPokemon(filteredData);
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
