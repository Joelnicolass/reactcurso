import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Parte5 from "../5-redux/Parte5";
import { Provider } from "react-redux";
import { store } from "../reducers/store";

/* 

    Hay varios paradigmas para enfocar las pruebas de codigo.
    En este caso, testearemos especificamente la UI de la aplicación.

    Para ello, usaremos Jest como marco de trabajo, y la libreria @testing-library/react para las pruebas de componentes.
    
    React Testing Library (RTL) nos permite renderizar la UI de nuestra aplicación y obtener información de ella.

    Ademas, podremos ejecutar eventos en la UI de nuestra aplicación, como click, hover, etc.

*/

/* 
    Por norma general, para ordenar nuestras pruebas, las agruparemos dentro de la funcion describe.
    Ademas, es posible tener describes dentro de otros describes.

    Esto nos permite una mejor lectura.
*/

/* 

    Cada prueba unitaria debe tener una descripcion, que debe indicar que se espera probar.
    Esta descripcion generalmente se basa en criterios de aceptación, como por ejemplo:
    - Que el componente renderice correctamente
    - Que el componente tenga un estado inicial
    - Que el componente tenga un estado final
    - Que el servicio devuelva un resultado correcto

*/

/* 

    Las pruebas estan estructuradas de la siguiente manera:

    it('descripcion de la prueba', () => {

        preparaciones -> montar el componente, preparar mocks, etc.
        eventos -> ejecutar eventos en el componente.
        comprobaciones -> comprobar si el resultado es correcto.

    })

*/

describe("testeos", () => {
  it("Debe existir un boton con el texto obtener pokemones", () => {
    // preparaciones
    render(
      <Provider store={store}>
        <Parte5 />
      </Provider>
    );

    const button = screen.getByText(/obtener Pokemones/i);

    // comprobaciones
    expect(button).toBeInTheDocument();
  });

  it("Debe existir una lista de pokemones", async () => {
    // preparaciones
    render(
      <Provider store={store}>
        <Parte5 />
      </Provider>
    );

    const button = screen.getByText(/obtener Pokemones/i);

    // eventos
    fireEvent.click(button);

    // comprobaciones
    await screen.findByText(/bulbasaur/i);
  });

  it("El boton + debe aumentar el valor del contador", () => {
    // preparaciones
    render(
      <Provider store={store}>
        <Parte5 />
      </Provider>
    );

    const button = screen.getByText("+");
    const contador = screen.getByText("0");

    // eventos
    fireEvent.click(button);

    // comprobaciones
    expect(contador).toHaveTextContent("1");
  });
});
