// Variable en Javascript
var hola = "Hola mundo";
// Variable en TypeScript
var holaMundo : string = "Hola mundo";
var numero : number = 10;
var booleano : boolean = true;
var fecha : Date = new Date();
var cualquiera : any = "Hola mundo";
// Arreglos
var arreglo : string[] = ["Hola", "Mundo"];
var arreglo2 : Array<string> = ["Hola", "Mundo"];
// Tuplas
var tupla : [number, string] = [1, "Hola"];
// objetos
var objeto : {nombre: string, apellido: string} = {nombre: "Juan", apellido: "Perez"};
// Elemento HTML
var elemento : HTMLElement = document.body;
// null y undefined
var nulo : null = null;
var indefinido : undefined = undefined;
// void
function saludar3() : void {
  console.log("Hola mundo");
}

// Funciones
function saludar(nombre : string) : string {
  return "Hola " + nombre;
}

// interfaces
interface Persona {
  nombre : string;
  apellido : string;
}

function saludar2(persona : Persona) : string {
  //return "Hola " + persona.nombre + " " + persona.apellido;
  return `Hola ${persona.nombre} ${persona.apellido}`;
}