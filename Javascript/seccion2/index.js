/*
  Funciones
  Las funciones son bloques de código que se pueden reutilizar
  en cualquier parte de nuestro programa.
*/

// Declaración de una función
function miFuncion() {
  console.log('Hola mundo');
}

// Llamado de una función
miFuncion();
miFuncion();

// Funciones con parámetros
function saludar(nombre = 'Desconocido') {
  console.log('Hola ' + nombre);
}

saludar('Juan');
saludar('Carlos');
saludar();

function sumar(a = 0, b = 0, c = 0) {
  console.log(a + b + c);
}

sumar(5, 3);
sumar(0, 20);

// Funciones que retornan un valor
function sumar_con_retorno(a, b) {
  return a + b;
}
console.log(sumar(5, 3));
//console.log(undefined)
console.log(sumar_con_retorno(5, 3));
//console.log(8)

/*
  Otros ejemplos
*/
var sumatoria = sumar(5,5)
console.log(sumatoria)
sumatoria = sumar_con_retorno(12,'5')
console.log(sumatoria)

/*
  Scope (Alcance)
  El scope es el alcance que tienen las variables en JavaScript.
*/

// Variables globales
var nombre = 'Juan';
// Variables locales
let apellido = 'Perez';
// Constantes (Locales)
const PI = 3.1416;

if(true) {
  //var apellido = 'Gomez';
}
console.log(apellido);

if(true){
  let saludo = 'Hola';
  if(true){
    console.log(saludo);
  }
}

/*
  Hoisting
  El hoisting es un comportamiento de JavaScript que mueve las declaraciones
  al inicio de su contexto.
*/
console.log(miNombre);
var miNombre = 'Juan';

/*
  Ejercicios de funciones
  1) Crea una funcion que reciba un nombre y lo salude por su nombre (En consola)
  2) Crea una funcion que sirva como una calculadora y reciba dos numeros
  y una operacion y retorne el resultado y posteriormente imprima el resultado
  3) Crea una funcion que te permita calcular el area de un cuadrado
  4) Crea una funcion que te permita calcular el area de un triangulo
  5) Crea una funcion que te permita calcular la hipotenusa de un triangulo

  Opcional
  6) Crea una funcion que imprima la sucesion de fibonacci hasta un numero
  determinado por parametro
*/