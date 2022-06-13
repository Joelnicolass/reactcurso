import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementar,
  decrementar,
  incrementarPorCantidad,
} from "../reducers/slices/counterSlice";
import { getAllPokemons } from "../reducers/slices/pokemonSlice";

const Parte5 = () => {
  const dispatch = useDispatch();
  const pokeApi = useSelector((state) => state.pokeApi);
  const contador = useSelector((state) => state.contador.value);

  return (
    <div>
      <h1>Redux</h1>
      <h2>Contador:</h2>
      <h2 id="contador">{contador}</h2>
      <hr />
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
      <button onClick={() => dispatch(incrementarPorCantidad(5))}>+5</button>

      <hr />

      <h2>Llamada a Api con REDUX</h2>

      <button onClick={() => dispatch(getAllPokemons())}>
        obtener pokemones
      </button>

      <hr />

      <h5>
        {pokeApi.loading && "Cargando..."}
        {pokeApi.error && "Error"}

        {pokeApi.pokemons.map((pokemon, id) => (
          <div key={id}>
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </h5>
    </div>
  );
};

export default Parte5;
