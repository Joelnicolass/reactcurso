import React from "react";
import { useContext } from "react";
import { ContextoDeParte3 } from "./Parte3Context";

/* 
    Para acceder a la informacion que provee el contexto, debemos utilizar el hook useContext.
    El hook useContext recibe como parametro el contexto que queremos utilizar.
    El contexto que se utiliza en este caso es el contexto de Parte3.
*/

const Componente3 = () => {
  const contexto = useContext(ContextoDeParte3);

  return (
    <div>
      <h1>Componente3</h1>

      <h3>{contexto.estado}</h3>
    </div>
  );
};

export default Componente3;
