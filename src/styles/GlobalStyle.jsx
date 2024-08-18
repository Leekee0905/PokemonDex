// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Dongle", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: #ffe6d9;
  }

  main {
    width: 100%;
  }
  
  #root{
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

export default GlobalStyle;
