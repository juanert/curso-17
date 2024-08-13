import girl from "./../resources/img/girl.png";
/*
  Hooks
  son funciones que nos permiten manejar el estado
  y ciclo de vida de los componentes funcionales
*/
import { useState, useEffect, useRef } from "react";
/*
  UseState
  es un hook que nos permite manejar el estado de un componente
  
  useEffect
  Es un hook que nos permite manejar asincronias y efectos secundarios
  en un componente funcional además de manejar el ciclo de vida, este
  recibe dos parametros, una funcion y un array de dependencias

  useRef
  Es un hook que nos permite hacer referencia a un elemento del DOM
*/

export default function Products() {
  const background = ["bg-blue-600", "bg-orange-600", "bg-green-600"];
  const [color, setColor] = useState(0);
  const [characters, setCharacters] = useState(null);
  const [link, setLink] = useState("https://rickandmortyapi.com/api/character");
  const nombre = useRef(null);
  const email = useRef(null);
  const mensaje = useRef(null);
  const [error, setError] = useState({
    nombre: { mensaje: "", error: false },
    email: { mensaje: "", error: false },
    mensaje: { mensaje: "", error: false },
  });

  const checkInput = () => {
    //Nombre solo acepta letras y espacios
    const nombreRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    //Mensaje solo acepta letras, numeros, signos de puntuacion y espacios
    const mensajeRegex = /^[a-zA-Z0-9,.¡!¿? ]+$/;
    if (!nombreRegex.test(nombre.current.value)) {
      setError({
        ...error,
        nombre: {
          mensaje: "El nombre solo debe de contener letras y espacios",
          error: true,
        },
      });
    } else {
      setError({
        ...error,
        nombre: {
          mensaje: "",
          error: false,
        },
      });
    }
    if (!emailRegex.test(email.current.value)) {
      setError({
        ...error,
        email: { mensaje: "Email no valido", error: true },
      });
    } else {
      setError({
        ...error,
        email: {
          mensaje: "",
          error: false,
        },
      });
    }
    if (!mensajeRegex.test(mensaje.current.value)) {
      setError({
        ...error,
        mensaje: {
          mensaje:
            "El mensaje solo debe de contener letras, numeros, signos de puntuacion y espacios",
          error: true,
        },
      });
    } else {
      setError({
        ...error,
        mensaje: {
          mensaje: "",
          error: false,
        },
      });
    }
  };

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [link]);

  if (!characters) return <h1>Cargando...</h1>;

  return (
    <>
      <section
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
      </section>
      <section className="flex flex-col gap-8 py-8">
        <h1 className="font-bold text-center text-3xl">Personajes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {characters &&
            characters.results.map((character) => {
              return (
                <div
                  key={character.id}
                  className="flex flex-col justify-center items-center gap-4"
                >
                  <h1>{character.name}</h1>
                  <img src={character.image} alt={character.name} />
                </div>
              );
            })}
        </div>
        <div className="flex justify-center items-center gap-4">
          {characters && characters.info.prev ? (
            <button onClick={() => setLink(characters.info.prev)}>
              Anterior
            </button>
          ) : (
            <button disabled>Anterior</button>
          )}
          {characters && characters.info.next ? (
            <button onClick={() => setLink(characters.info.next)}>
              Siguiente
            </button>
          ) : (
            <button disabled>Siguiente</button>
          )}
        </div>
      </section>
      <section className="bg-blue-600 text-white flex flex-col items-center justify-center gap-8 py-8">
        <h1>Formulario de contacto</h1>
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <input
            ref={nombre}
            className="rounded-[10px] pl-4 text-black w-[75%] md:w-[50%]"
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            onKeyUp={checkInput}
          />
          {error.nombre.error && (
            <p className="text-red-600">{error.nombre.mensaje}</p>
          )}
          <input
            ref={email}
            className="rounded-[10px] pl-4 text-black w-[75%] md:w-[50%]"
            type="email"
            name="email"
            placeholder="Email"
            required
            onKeyUp={checkInput}
          />
          {error.email.error && (
            <p className="text-red-600">{error.email.mensaje}</p>
          )}
          <textarea
            ref={mensaje}
            className="rounded-[10px] pl-4 text-black w-[75%] md:w-[50%]"
            name="mensaje"
            placeholder="Mensaje"
            required
            onKeyUp={checkInput}
          ></textarea>
          {error.mensaje.error && (
            <p className="text-red-600">{error.mensaje.mensaje}</p>
          )}
          <button className="rounded-[10px] px-8 py-4 bg-white text-blue-600 font-semibold hover:font-bold hover:bg-blue-800 hover:text-white">
            Enviar
          </button>
        </div>
      </section>
    </>
  );
}

/*
  Mejorar este componente visualmente
  Y, agregar un boton al NavBar para manejar el modo oscuro o claro del navbar
  Opcional: Crea un componente local llamado "ColorButton" que reciba la posición
  del color y el estado de color y cambie el color del boton al dar click
*/
