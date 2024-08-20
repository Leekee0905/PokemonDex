import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dex from "./pages/Dex/Dex";
import Layout from "./layout/Layout";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import GlobalStyle from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/dex" element={<Dex />} />
              <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
