## 프로젝트 구조

```markdown
```
PokemonDex
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ assets
│     ├─ favicon.png
│     ├─ pokeball.png
│     └─ pokemon-logo.png
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ Dashboard
│  │  │  ├─ Dashboard.jsx
│  │  │  └─ DashboardStyle.js
│  │  ├─ PokemonCard
│  │  │  ├─ PokemonCard.jsx
│  │  │  └─ PokemonCardStyle.js
│  │  └─ PokemonList
│  │     ├─ PokemonList.jsx
│  │     └─ PokemonListStyle.js
│  ├─ data
│  │  └─ mock.js
│  ├─ hooks
│  │  └─ usePokemon.js
│  ├─ layout
│  │  └─ Layout.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Dex
│  │  │  ├─ Dex.jsx
│  │  │  └─ DexStyles.js
│  │  ├─ Home
│  │  │  ├─ Home.jsx
│  │  │  └─ HomeStyles.js
│  │  └─ PokemonDetail
│  │     ├─ DetailStyle.js
│  │     └─ PokemonDetail.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ modules
│  │     └─ pokemon.js
│  ├─ reset.css
│  └─ styles
│     ├─ GlobalStyle.jsx
│     └─ StyledButton.jsx
└─ vite.config.js

```

```

## 프로젝트 배포 주소

URL: https://pokemon-dex-nine.vercel.app/

## 페이지 별 기능 및 UI

### 홈

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/02df129a-b2d5-44a5-bdd2-0c47b70093c9/image.png)

특별한 기능 없이 /dex로 navigate하는 버튼 하나가 구현되어 있다.

### Dex

#### 추가하기

![추가](https://github.com/user-attachments/assets/047df440-3069-4c55-a181-6d6952596c28)

#### 삭제하기

![삭제](https://github.com/user-attachments/assets/b31941a4-6008-42a4-b1bc-a824f632baa0)

#### 디테일에서 추가하기

![디테일추가](https://github.com/user-attachments/assets/b6445149-375f-4f64-a95a-cc2d6b8d3d43)

디테일 페이지에서 추가를 눌렀을 때 선택하지 않았다면 정상 진행

이미 추가했다면 에러 모달

#### 길이넘었을때

![길이넘음](https://github.com/user-attachments/assets/97fe8293-b424-412c-b02c-dd9932adb576)

이미 6마리가 채워져있을 때 에러 모달

## Refactoring 순서
**branch** 기준
props-drilling => context => redux-toolkits => refactor

### props-drilling
PokemonCard.jsx
``` jsx
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardImg,
  CardInfo,
  CardPokeId,
  CardPokeName,
} from "../styles/DexStyles";
import StyledButton from "../styles/StyledButton";

const PokemonCard = ({
  pokemonData,
  selectedPokemon,
  setSelectedPokemon,
  isSelect,
}) => {
  const navigate = useNavigate();

  const handleAddButton = () => {
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

  const convertPokemonId = (id) => {
    return id.toString().padStart(3, "0");
  };

  const navigateToDetail = () => {
    navigate(`/pokemon-detail/${pokemonData.id}`);
  };

  return (
    <Card onClick={() => navigateToDetail()}>
      <CardImg src={pokemonData.img_url} />
      <CardInfo>
        <CardPokeName>{pokemonData.korean_name}</CardPokeName>
        <CardPokeId>No. {convertPokemonId(pokemonData.id)}</CardPokeId>
      </CardInfo>
      <StyledButton
        width="45px"
        height="20px"
        fontSize="16px"
        onClick={(e) => {
          e.stopPropagation();
          isSelect ? handleDeleteButton(pokemonData.id) : handleAddButton();
        }}
      >
        {isSelect ? "삭제" : "추가"}
      </StyledButton>
    </Card>
  );
};

export default PokemonCard;
```
**props**를 통해 state와 setter함수를 받아와 Button의 이벤트 핸들러 내부에서 상태를 설정할 수 있는 동작을 구현

### context
``` jsx
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
  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
```
context를 생성 후 Provider에서 state를 관리 후 Provider의 children에게 state와 setter함수 공유


``` jsx
//usePokemon.jsx
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("context가 없습니다!");
  }
  return context;
};

export default usePokemon;
```
컴포넌트 마다 context생성을 custom hook으로 돌리기

```jsx
const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const { selectedPokemon, setSelectedPokemon } = usePokemon();

  const handleAddButton = () => {
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
// ...
}
```
props로 내려받던 state와 setState를 custom Hook을 통해 context에서 받아옴, 불필요한 props제거

### redux-toolkits
context api 제거 후 redux-toolkits를 사용하여 리팩토링 진행

``` jsx
// ./redux/modules/pokemon.js
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
```  
slice내부에 버튼을 눌렀을 때 동작해야할 로직을 reducer 내부에서 생성

```jsx
// PokemonCard.jsx
const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(addPokemon(pokemonData));
  };

  const handleDeleteButton = (id) => {
    dispatch(deletePokemon(id));
  };
// ...
}
```  

기존 로직이 reducer로 들어가면서 dispatch를 통해 reducer에서 동작하도록 payload로 입력해줌  

### refactor
sweetalert2 라이브러리를 사용하면서 버튼 클릭시 이벤트가 겹쳐 customhook을 통해 추가 삭제 및 데이터를 통합하기로함
styled-components를 사용한 파일들을 styles폴더에서 한 번에 관리하는 것이 아닌 컴포넌트와 페이지별 폴더를 따로 생성하고 그에 맞는 파일끼리 묶어놓기로함  

```jsx
/hooks/usePokemon.js
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
```  

커스텀훅 생성으로 인한 PokemonCard.jsx 로직 변경

```jsx
//PokemonCard.jsx
const PokemonCard = ({ pokemonData, isSelect }) => {
  const navigate = useNavigate();
  const { addPokemonToTeam, deletePokemonFromTeam } = usePokemon();

  const convertPokemonId = (id) => {
    return id.toString().padStart(3, "0");
  };
  //...
}
```
customHook을 통해 가져온 함수를 그대로 onClick 이벤트에 사용

## 후기
props-drilling부터 시작해서 refactor 브랜치까지 단계별로 리팩토링을 진행해 보았는데 이 덕분인지 각 API와 라이브러리의 사용 이유를 확실하게 깨닳게 되었다.  
지금의 코드는 더 리팩토링할 수 있겠지만 단계별로 리팩토링을 해보면서 코드를 어떻게 만들어야 할지 생각하는 점이 점차 변하는 것 같다.  
이번 과제를 하면서 리팩토링에 대해 재미를 느꼈고 다른 사람들의 코드리뷰나 나의 코드에 대해 많은 다른 사람들에게 물어보며 내 코드를 점차 진화(?), 발전 시키고 싶다.
