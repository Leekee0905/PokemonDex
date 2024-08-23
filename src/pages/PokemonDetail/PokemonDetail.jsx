import { useNavigate, useParams } from "react-router-dom";
import {
  DetailButtonBox,
  DetailContainer,
  DetailImage,
  DetailInfo,
  DetailName,
} from "./DetailStyle";
import MOCK_DATA from "../../data/mock";
import StyledButton from "../../styles/StyledButton";
import usePokemon from "../../hooks/usePokemon";

const PokemonDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const data = MOCK_DATA.find((e) => e.id === Number(params.id));
  const { addPokemonToTeam } = usePokemon();
  return (
    <DetailContainer className="pokemon-detail-container">
      <DetailImage
        className="pokemon-detail-img"
        src={data.img_url}
        alt={data.korean_name}
      />
      <DetailName className="pokemon-detail-name">
        {data.korean_name}
      </DetailName>
      <DetailInfo className="pokemon-detail-info">
        타입: {data.types.map((e) => e).join(" ")}
      </DetailInfo>
      <DetailInfo className="pokemon-detail-info">
        {data.description}
      </DetailInfo>
      <DetailButtonBox className="pokemon-detail-button-box">
        <StyledButton
          className="pokemon-detail-button"
          width="100px"
          height="40px"
          fontSize="32px"
          onClick={() => addPokemonToTeam(data)}
        >
          추가
        </StyledButton>
        <StyledButton
          className="pokemon-detail-button"
          width="100px"
          height="40px"
          fontSize="32px"
          onClick={() => navigate("/dex")}
        >
          뒤로가기
        </StyledButton>
      </DetailButtonBox>
    </DetailContainer>
  );
};

export default PokemonDetail;
