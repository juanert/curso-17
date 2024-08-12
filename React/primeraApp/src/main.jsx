import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "./Components/Button";
import List from "./Components/List";

/*
  Crear un componente "Lista" que reciba un array de strings llamado
  "caracteristicas" y que muestre una lista de elementos <li>
  y debes renderizar dos veces el componente con diferentes
  caracteristicas. (Utilizar .map para recorrer el array)

  ejercicio 2
  Crea un componente llamado "card" que reciba un objeto con 
  las siguientes propiedades:
  {
    title: "Titulo de la card",
    description: "Descripción de la card",
    image: "url de la imagen",
  }
  y renderiza dos veces el componente con diferentes propiedades.
  Este componente además debe de tener un boton que diga "Ver más",
  debes usar el componente Button que ya hicimos. Y validar
  con PropTypes.
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Button text="Hola Mundo 1" background="bg-red-600" />
    <Button text="Hola Mundo 2" background="bg-green-600" />
    <Button text="Hola Mundo 3" />
    <Button text="Hola Mundo 4" />
    <List items={["Rápido", "Bonito", "Barato"]} />
    <List items={["Lento", "Feo", "Caro"]} />
  </StrictMode>
);
