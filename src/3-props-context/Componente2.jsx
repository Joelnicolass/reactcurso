import React from "react";
import Componente3 from "./Componente3";

const Componente2 = ({ contador, aumentar }) => {
  return (
    <div>
      <h1>Componente 2</h1>
      <h2>{contador}</h2>
      <button onClick={aumentar}>Aumentar desde el hijo</button>

      <hr />

      <Componente3 />
    </div>
  );
};

export default Componente2;
