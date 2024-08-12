import girl from "./../resources/img/girl.png";
/*
  Hooks
  son funciones que nos permiten manejar el estado
  y ciclo de vida de los componentes funcionales
*/
import { useState } from "react";
/*
  UseState
  es un hook que nos permite manejar el estado de un componente
*/

export default function Products() {
  const background = ["bg-blue-600", "bg-orange-600", "bg-green-600"];
  const [color, setColor] = useState(0);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 h-min-[80vh] px-8 ${background[color]} transition-all duration-300`}
    >
      <div className="flex flex-col justify-center items-start gap-3">
        <h1 className="font-bold text-3xl">Prueba nuestro nuevo Shampoo</h1>
        <p className="font-normal">
          Una mezcla de extratos frutales que protegeran tu cabello
        </p>
        <button className="bg-yellow-400 rounded-[25px] px-16 py-2 text-center text-white font-semibold hover:px-18 hover:py-4 transition-all duration-300">
          Ver más
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img src={girl} alt="Shampoo" />
      </div>
      <div className="col-span-2 flex justify-center items-center gap-4 py-8">
        <button
          onClick={() => {
            setColor(0);
          }}
          className={`w-[15px] h-[15px] rounded-full ${
            color == 0 ? "bg-slate-600" : "bg-gray-400"
          } hover:bg-slate-600 transition-all duration-300`}
        ></button>
        <button
          onClick={() => {
            setColor(1);
          }}
          className={`w-[15px] h-[15px] rounded-full ${
            color == 1 ? "bg-slate-600" : "bg-gray-400"
          } hover:bg-slate-600 transition-all duration-300`}
        ></button>
        <button
          onClick={() => {
            setColor(2);
          }}
          className={`w-[15px] h-[15px] rounded-full ${
            color == 2 ? "bg-slate-600" : "bg-gray-400"
          } hover:bg-slate-600 transition-all duration-300`}
        ></button>
      </div>
    </div>
  );
}

/*
  Mejorar este componente visualmente
  Y, agregar un boton al NavBar para manejar el modo oscuro o claro del navbar
  Opcional: Crea un componente local llamado "ColorButton" que reciba la posición
  del color y el estado de color y cambie el color del boton al dar click
*/
