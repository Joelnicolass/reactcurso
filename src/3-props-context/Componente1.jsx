import React, { useState } from "react";
import Componente2 from "./Componente2";

const Componente1 = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Componente 1</h1>
      <button onClick={aumentar}>Aumentar desde el padre</button>
      <hr />
      <Componente2 contador={contador} aumentar={aumentar} />
    </div>
  );
};

export default Componente1;
