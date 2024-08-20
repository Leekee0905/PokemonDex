import { useDispatch, useSelector } from "react-redux";
import {
  addPokemon,
  clearError,
  deletePokemon,
} from "../redux/modules/pokemon";
import store from "../redux/config/configStore";
import Swal from "sweetalert2";

const usePokemon = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const addPokemonToTeam = (pokemonData) => {
    dispatch(addPokemon(pokemonData));
    const state = store.getState();
    const error = state.pokemon.addPokemonError;
    if (error) {
      return Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "확인",
      }).then(() => dispatch(clearError()));
    }
    Swal.fire({
      title: "Success!",
      text: "성공적으로 추가했습니다.",
      icon: "success",
      confirmButtonText: "확인",
    });
  };

  const deletePokemonFromTeam = (id) => {
    dispatch(deletePokemon(id));
  };
  return { selectedPokemon, addPokemonToTeam, deletePokemonFromTeam };
};

export default usePokemon;
