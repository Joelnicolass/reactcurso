import React, { useState } from "react";
import Componente1 from "./Componente1";
import { ContextoDeParte3 } from "./Parte3Context";

/* 
    Es vital entender como funciona el pasaje de información entre componentes.
    En este caso, el pasaje de información entre componentes es mediante el uso de props.

    Para pasar información entre componentes, simplemente se debe declarar una prop en el componente.
    Cuando un componente padre invoca un componente hijo, puede pasarle cualquier tipo de dato mediante las props, en caso de que el componente hijo lo requiera.

    Es importante comprender que el pasaje de información entre componentes sigue un orden jerarquico.
    El componente padre debe pasarle las props al componente hijo.
    Si el hijo necesita invocar una funcion del padre, el padre debe pasarle la funcion al componente hijo.

*/

const Parte3 = () => {
  const [estado, setEstado] = useState(
    "Soy una variable que esta disponible para todos los hijos de Parte3"
  );

  return (
    <ContextoDeParte3.Provider value={{ estado }}>
      <div>
        <h1>Props</h1>
        <hr />
        <h3>
          En este caso, el componente Padre (Componente1) pasara el estado
          contador al componente hijo (Componente2). El componente hijo sera
          quien renderice el valor del contador. A su vez, el padre tambien
          pasara una funcion a el componente hijo, para aumentar el valor del
          contador. El padre tambien podra ejecutar dicha funcion.
        </h3>

        <hr />

        <h3>
          El inconveniente que existe con el uso de las props, surge cuando hay
          varios componentes que dependen de un mismo estado, y estos
          componentes estan en un punto jerarquico distante. Es decir, cuando se
          require el pasaje de informacion entre muchos componentes, o cuando se
          requieren estados globales.
        </h3>

        <h1>Para estos casos existe context.</h1>
        <h3>
          Context permite que cierta parte de nuestra aplicacion pueda acceder a
          la informacion que se necesite. En este caso, el contexto de Parte3,
          permite que cualquier componente hijo tenga acceso al string declarado
          al principio del componente.
        </h3>

        <hr />
        <Componente1 />
      </div>
    </ContextoDeParte3.Provider>
  );
};

export default Parte3;
