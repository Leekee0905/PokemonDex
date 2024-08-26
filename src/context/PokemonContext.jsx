import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const handleAddButton = (pokemonData) => {
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
  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        handleAddButton,
        handleDeleteButton,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
