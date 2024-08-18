import styled from "styled-components";

export const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const DashBoardTItle = styled.h2`
  color: red;
  font-size: 64px;
  margin-bottom: 20px;
`;

export const DashBoardItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

export const DashBoardItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const DashBoardImg = styled.img`
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 50px;
  height: 50px;
`;

export const DashboardConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

export const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.05) translateY(-10px);
    transition: 0.3s;
  }
`;

export const CardImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const CardInfo = styled.div`
  margin-top: 10px;
`;

export const CardPokeName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0px;
  color: black;
`;
export const CardPokeId = styled.p`
  font-size: 24px;
  color: rgb(102, 102, 102);
`;
