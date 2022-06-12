import React, { useReducer } from "react";
import Parte41 from "./Parte4-1";

/* 

    Los reducers son funciones comunes y corrientes. Su particularidad es que reciben un estado y una acción, y luego de esto, retornan un nuevo estado.

    Los reducers son funciones puras. Esto quiere decir que, dadas las mismas condiciones, su resultado siempre será el mismo.

    El estado de un reducer es un objeto, donde podremos guardar cualquier tipo de dato.

    Las acciones son objetos que contienen una propiedad llamada type, que es un string que identifica la acción que se está ejecutando.
    Adicionalmente, podemos agregar una propiedad llamada payload, que contiene el dato que queremos guardar en el estado.

    Es importante resaltar que los reducers no se ejecutan directamente, sino que se ejecutan por medio de una función que se llama dispatch.

    El dispatch es una función que recibe una acción y se encarga de ejecutar el reducer correspondiente.

*/

const estadoInicial = {
  valor: 0,
};

const reducer = (state = estadoInicial, action) => {
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

const Parte4 = () => {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <>
      <h1>Reducers, introduccion</h1>;
      <hr />
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
      <hr />
      <Parte41 />
    </>
  );
};

export default Parte4;
