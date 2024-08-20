import { useNavigate } from "react-router-dom";
import { HomeContainer, PokemonLogo } from "./HomeStyles";
import StyledButton from "../../styles/StyledButton";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <PokemonLogo src="/assets/pokemon-logo.png" alt="포켓몬 로고" />
      <StyledButton
        width={"220px"}
        height={"50px"}
        fontSize={"35px"}
        onClick={() => navigate("/dex")}
      >
        포켓몬 도감 시작하기
      </StyledButton>
    </HomeContainer>
  );
};

export default Home;
