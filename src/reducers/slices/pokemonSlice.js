import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist";

export const getAllPokemons = createAsyncThunk(
  "pokemon/getAllPokemons",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokeApi",
  initialState: {
    pokemons: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemons.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload.results;
      })
      .addCase(getAllPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

const { actions, reducer: pokemonReducer } = pokemonSlice;
export default pokemonReducer;
