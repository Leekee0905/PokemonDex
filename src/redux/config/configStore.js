import { configureStore } from "@reduxjs/toolkit";
import pokemon from "../modules/pokemon";

const store = configureStore({
  reducer: {
    pokemon,
  },
});
export default store;
