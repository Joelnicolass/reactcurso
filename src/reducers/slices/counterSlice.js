import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const contadorSlice = createSlice({
  name: "contador",
  initialState,
  reducers: {
    incrementar: (state) => {
      state.value += 1;
    },
    decrementar: (state) => {
      state.value -= 1;
    },
    incrementarPorCantidad: (state, action) => {
      state.value += action.payload;
    },
  },
});

const { actions, reducer: contadorReducer } = contadorSlice;
export const { incrementar, decrementar, incrementarPorCantidad } = actions;
export default contadorReducer;
