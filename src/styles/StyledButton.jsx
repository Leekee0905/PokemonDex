import styled from "styled-components";
const StyledButton = styled.button`
  background-color: red;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 0;
  border-radius: 10px;
  color: white;
  font-size: ${(props) => props.fontSize};
`;

export default StyledButton;
