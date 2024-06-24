//ES6
//Arrow Function (Funciones de Flecha)
let sumar = (a, b) => { return a + b };
console.log(sumar(5, 5));
// let sumar = function(a, b) { return a + b; }

//Spread Operator (Operador de Propagación)
let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
let numeros3 = [...numeros, ...numeros2];

let persona = {
  nombre: 'Juan',
  edad: 30
}

persona = { ...persona, trabajo: 'Programador' };
persona.trabajo = 'Programador';

// Map
numeros.map((numero, indice) => console.log(numero * 2, indice));

// Operador Ternario
let resultado = 10 > 5 ? 'Verdadero' : 'Falso';
let resultado2 = 10 > 15 && 2 < 1 ? 'Verdadero' : 'Falso';
console.log(2 > 1 ? 'Verdadero' : 'Falso');

// Destructuring (Desestructuración)
/*
la desestructuración es una expresión de JavaScript que hace posible la extracción 
de datos de arreglos u objetos usando una sintaxis que equivale a la construcción 
de arreglos y objetos literales.
*/
let numeros4 = [1, 2, 3, 4, "Cinco"];
let [uno, dos, tres, cuatro, cinco] = numeros4;
console.log(uno, dos, tres, cuatro, cinco);

let persona2 = {
  nombre: 'Juan',
  edad: 30,
  trabajo: 'Programador'
}

let { nombre } = persona2;
//let nombre = persona2.nombre;
console.log(nombre); // Juan

/*
  Ejercicios para practicar los conceptos de la sección 3
  1.- Crear una función que reciba un arreglo con 5 números y devuelva la suma de todos ellos. (usa map)
  2.- Crear una función que reciba un arreglo con 5 números y devuelva el número más grande. (Usa operador ternario y map)
*/

// 1
let numeros_ejercicio = [1, 2, 3, 4, 5];
let suma = 0;
numeros_ejercicio.map((numero) => suma += numero);
console.log(suma);