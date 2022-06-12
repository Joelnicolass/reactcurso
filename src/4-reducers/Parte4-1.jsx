import React, { useReducer } from "react";

/* 

    En este caso, en lugar de declarar el estado inicial en el reducer, podemos usar la función inicializadora.

    La funcion que inicialice el estado del reducer debe retornar un objeto. EL mismo será el estado inicial.

*/

const funcionInicializadora = () => {
  return {
    valor: 0,
  };
};

/* 

    Si prestan atencion, el state en el reducer no esta inicializado como en el caso anterior.
    Ahora, al momento de usar este reducer, en el hook indicaremos como tercer parametro que funcion sera la encargada de crear ese estado.

*/

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        ...state,
        valor: state.valor + 1,
      };
    case "DECREMENTAR":
      return {
        ...state,
        valor: state.valor - 1,
      };
  }
};

const Parte41 = () => {
  const [estado, dispatch] = useReducer(reducer, {}, funcionInicializadora);

  return (
    <div>
      <h1>Reducers, segunda parte</h1>

      <h3>
        <strong>El estado actual es: {estado.valor}</strong>
      </h3>
      <hr />
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </button>
    </div>
  );
};

export default Parte41;
