import { useNavigate, useParams } from "react-router-dom";
import {
  DetailContainer,
  DetailImage,
  DetailInfo,
  DetailName,
} from "../styles/DetailStyle";
import MOCK_DATA from "../data/mock";
import StyledButton from "../styles/StyledButton";

const PokemonDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const data = MOCK_DATA.find((e) => e.id === Number(params.id));
  return (
    <DetailContainer>
      <DetailImage src={data.img_url} alt={data.korean_name} />
      <DetailName>{data.korean_name}</DetailName>
      <DetailInfo>타입: {data.types.map((e) => e).join(" ")}</DetailInfo>
      <DetailInfo>{data.description}</DetailInfo>
      <StyledButton
        width="100px"
        height="40px"
        fontSize="32px"
        onClick={() => navigate("/dex")}
      >
        뒤로가기
      </StyledButton>
    </DetailContainer>
  );
};

export default PokemonDetail;
