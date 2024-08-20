import { createSlice } from "@reduxjs/toolkit";

const initialState = Array.from({ length: 6 }, () => null);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    selectedPokemon: initialState,
  },
  reducers: {
    addPokemon: (state, action) => {
      const dataLength = state.selectedPokemon.filter((e) => e !== null).length;
      const isSelected = state.selectedPokemon.some(
        (pokemon) => pokemon?.id === action.payload.id
      );
      if (dataLength >= 6) {
        return alert("선택할 수 있는 포켓몬 수를 넘었습니다.");
      }
      if (isSelected) {
        return alert("이미 선택한 포켓몬입니다.");
      }
      const newArr = [...state.selectedPokemon];
      const nullIndex = newArr.indexOf(null);
      if (nullIndex !== -1) {
        newArr[nullIndex] = action.payload;
      }
      state.selectedPokemon = newArr;
    },
    deletePokemon: (state, action) => {
      const filteredData = state.selectedPokemon.filter(
        (e) => e !== null && e.id !== action.payload
      );

      while (filteredData.length < state.selectedPokemon.length) {
        filteredData.push(null);
      }
      state.selectedPokemon = filteredData;
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
