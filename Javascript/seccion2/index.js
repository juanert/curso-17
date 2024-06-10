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

// 1
function saludar_por_nombre(nombre){
  console.log('Hola ' + nombre);
}

saludar_por_nombre('Juan');

// 2
function calculadora(n1,n2,operador){
  if(operador === "+"){
    console.log(n1 + n2);
  } else if(operador === "-") {
    console.log(n1-n2);
  } else if (operador === "*") {
    console.log(n1*n2);
  }else if (operador === "/") {
    console.log(n1/n2);
  }else if (operador === "**") {
    console.log(n1**n2);
  }
}

calculadora(2,2,"+");

function calcular_area_cuadrado(largo, ancho){
  console.log(largo*ancho);
}

function calcular_area_triangulo(base,altura){
  console.log((base*altura)/2)
}

function calcular_hipotenusa(angulo1,angulo2){
  console.log(Math.sqrt(angulo1**2 + angulo2**2))
}

function fibonacci(limite){
  let previo1 = 1;
  let previo2 = 0;
  let sucesion = 0
  while(sucesion <= limite){
    sucesion = previo1 + previo2;
    previo2 = previo1;
    previo1 = sucesion;
    if(sucesion <= limite){
      console.log(sucesion)
    }
  }
}

fibonacci(500);

//Recursividad
/*
  La recursividad es un concepto en programación donde una función se llama a sí misma
  para resolver un problema.
*/

function fibonacci_recursivo(limite, previo1 = 1, previo2 = 0, sucesion = 0){
  sucesion = previo1 + previo2;
  previo2 = previo1;
  previo1 = sucesion;
  if(sucesion <= limite){
    console.log(sucesion);
    fibonacci_recursivo(limite, previo1, previo2, sucesion);
  }
}

fibonacci_recursivo(10);

/*
  Ejercicios de recursividad
  1) Crea una función que calcule la potencia de un número
*/

function elevar(base, exponente, contador=1, valor_base = 0){
  let resultado = 0
  if(contador == 1){
    valor_base = base
  }
  console.log(base, exponente, contador, valor_base)
  if(contador < exponente){
    resultado = base * valor_base;
    console.log(resultado);
    contador++;
    elevar(resultado,exponente, contador, valor_base);
  }
}

elevar(2,3);

/*
  Metodos de strings
  Los strings son cadenas de texto y en JavaScript tienen varios métodos
*/

let texto = 'Hola mundo';
// Longitud de un string
console.log(texto.length);
// Convertir a mayúsculas
console.log(texto.toUpperCase());
// Convertir a minúsculas
console.log(texto.toLowerCase());
// Obtener un caracter de un string
console.log(texto.charAt(4));
// Cortar un string (El primer parametro es el inicio y el segundo es el fin)
console.log(texto.slice(0,4));
// Reemplazar un texto por otro
console.log(texto.replace('mundo','Juan'));
// Buscar un texto en un string
console.log(texto.indexOf('mundo'));
// Remplazar todas las ocurrencias de un texto
console.log(texto.replaceAll('o','a'));
// Verificar si un string termina con un texto
console.log("hola".endsWith("ola"));

/*
  Ejercicios de recursividad y metodos de strings
  1) Crea una función que reciba una palabra y la imprima al revés (Letra por letra)
  Opcional: Verificar si la palabra es un palíndromo
*/
