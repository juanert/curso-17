/*
ejemplo de como importar un archivo css
import "./../../resources/styles.css";
*/

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-8 py-2">
      <div>
        <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
      </div>
      <div className="hidden md:flex items-center justify-center gap-4">
        <p className="hover:font-semibold transition-all duration-300 cursor-pointer">Home</p>
        <p className="hover:font-semibold transition-all duration-300 cursor-pointer">
          Products
        </p>
      </div>
      <div className="flex md:hidden">
        <button>X</button>
      </div>
    </nav>
  );
}
