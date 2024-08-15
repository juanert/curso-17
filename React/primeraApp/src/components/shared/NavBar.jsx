/*
ejemplo de como importar un archivo css
import "./../../resources/styles.css";
*/

//importar contexto de tema
import { useContext } from "react";
import { ThemeContext } from "./../../context/themeContext";

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav className={`${darkMode ? "bg-slate-600" : "bg-blue-600"} text-white flex justify-between items-center px-8 py-2`}>
      <div>
        <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <p className="hover:font-semibold transition-all duration-300 cursor-pointer">Home</p>
        <p className="hover:font-semibold transition-all duration-300 cursor-pointer">
          Products
        </p>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>
      </div>
      <div className="flex md:hidden">
        <button>X</button>
      </div>
    </nav>
  );
}
