import React, { useState } from "react";

/* 

  React.js se basa en una filosofia de componentes.
  Esta filosofia plantea la reutilizacion de codigo por medio de la creacion de componentes.

  En un principio, react se manejaba fuertemente con componentes de clase.
  Estos componentes tenian la particularidad de poseer metodos especificos para guardar informacion en estados, asi como para controlar su ciclo de vida.

  Por otro lado, los componentes funcionales no poseian estas caracteristicas.

  En la version 16, react incorpora los hooks.
  Los hooks no son mas que funciones, las cuales pueden dotar a un componente funcional de las caracteristicas de los componentes de clase.

  En esta primera parte, veremos como acceder a los estados de un componente mediante hooks.
  El hook en cuestion es useState.
*/

const Parte1 = () => {
  const [estado, cambiarEstado] = useState(0);

  return (
    <div>
      <h1>Estados</h1>
      <hr />
      <h2>
        Un comoponente de React puede tener uno o varios estados. Estos estados
        son simplemente datos que pueden cambiar, y en base a estos cambios,
        React renderizara el componente de nuevo, mostrando las nuevas
        modificaciones.
      </h2>

      <hr />

      <h2>
        La manera de declarar estados en un componente es mediante el uso de
        useState, el hook que brinda a un componente funcional la posibilidad de
        guardar estados. Para modificar el estado, se debe usar el metodo set
        que incorpora el hook.
      </h2>

      <h3>
        la estructura del hook es la siguiente:
        <br />
        se declara una variable que contiene un array con dos elementos:
        <br />
        el primer elemento llevara el nombre del estado, y el segundo elemento
        es una funcion que se ejecutara cuando se quiera modificar el estado.
        <span>
          <strong>
            const [estado, cambiarEstado] = useState(valorInicial)
          </strong>
        </span>
      </h3>
      <hr />

      <h2>
        A continuacion se muestra en pantalla un estado, el mismo podra
        cambiarse desde el boton.
      </h2>

      <hr />

      {estado}

      <button onClick={() => cambiarEstado(estado + 1)}>Cambiar estado</button>
    </div>
  );
};

export default Parte1;
