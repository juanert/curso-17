//Archivo para manejar contexto de modo claro o oscuro
import { createContext, useState, useEffect } from "react";
import propTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  //save the dark mode in local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode) {
      setDarkMode(JSON.parse(isDarkMode));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};

/*
Children es el contenido que se va a renderizar dentro de un componente
Ejemplo:
const Div = ({ children }) => {
  {//children es el contenido que se va a renderizar dentro de Div}
  return <div className="bg-slate-300">{children}</div>;
}

<p>Hola</p>

const Page = () => {
  {//En este caso children es el contenido de la etiqueta Div}
  {//Es decir <p>Hola</p>}
  return <Div><p>Hola</p></Div>;
}
*/
