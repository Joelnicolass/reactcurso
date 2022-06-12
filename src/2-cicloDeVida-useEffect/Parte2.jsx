import React, { useEffect, useState } from "react";

/* 

    En esta parte, veremos como funciona el hook useEffect.
    Este hook permite a un componente funcional realizar una accion cuando el componente se renderiza, cuando se actualiza o cuando se elimina... es decir, nos permite ejecutar acciones durante el ciclo de vida del componente.

    Para comprender como funciona, debemos tener claro que es el ciclo de vida.

    Como sabemos, React trabaja sobre un DOM virtual, una representacion del DOM real que se renderiza en el navegador.
    
    Al añadir un nodo al DOM virtual, podemos decir que el componente se ha montado.
    Al actualizar un nodo del DOM virtual, podemos decir que el componente se ha actualizado.
    Al eliminar un nodo del DOM virtual, podemos decir que el componente se ha desmontado.

    En estos tres casos podemos apreciar el ciclo de vida de un componente. Nace, se desarrolla y muere.

    En los componentes de clase, tenemos metodos especificos para acceder a cada momento, de manera declarativa y bastante especifica:
    componentDidMount, componentDidUpdate, componentWillUnmount.

    sin embargo, en los componentes funcionales, no tenemos estos metodos, por lo que tenemos que utilizar el hook useEffect.

    component did mount:
    useEffect(() => {
        acciones que se ejecutan cuando el componente se monta
    }, [])

    component did update:
    useEffect(() => {
        acciones que se ejecutan cuando el componente se monta y se actualiza
    }, [
        lista de variables que se escuchan para saber si se debe ejecutar la accion
    ])

    component will unmount:
    useEffect(() => {
        acciones que se ejecutan cuando el componente se monta
        
        return () => {
            acciones que se ejecutan cuando el componente se desmonta
        }

    }, [])

*/

const Parte2 = () => {
  const [estado, cambiarEstado] = useState(0);

  useEffect(() => {
    alert(estado);
  }, [estado]);

  return (
    <div>
      <h2>
        Cada vez que se actualice la variable estado, el componente ejecutara un
        alert con el valor de estado.
      </h2>
      <hr />
      {estado}
      <hr />
      <button onClick={() => cambiarEstado(estado + 1)}>Cambiar estado</button>
      <hr />
    </div>
  );
};

export default Parte2;
