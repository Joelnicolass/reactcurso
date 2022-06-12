import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/counterSlice";
import pokemonReducer from "./slices/pokemonSlice";

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
    pokeApi: pokemonReducer,
  },
});
