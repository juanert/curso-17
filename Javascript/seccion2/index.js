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

let palabra = 'Oso';

function invertir_palabra(palabra, contador = 1, palabra_invertida = ''){
  if(contador <= palabra.length){
    console.log(palabra.charAt(palabra.length - contador));
    palabra_invertida += palabra.charAt(palabra.length - contador);
    console.log('Palabra invertida:' + palabra_invertida);
    if(palabra.toLowerCase() == palabra_invertida.toLowerCase()){
      console.log('Es un palindromo');
    }
    contador++;
    invertir_palabra(palabra, contador, palabra_invertida);
  }
}

invertir_palabra(palabra);

/*
  Arrays y los metodos de array
  Los arrays son listas de elementos y en JavaScript tienen varios métodos
*/

let frutas = ['Manzana','Pera','Uva','Sandia'];
// Longitud de un array
console.log(frutas.length);
// Agregar un elemento al final del array
frutas.push('Fresa');
console.log(frutas);
// Eliminar el ultimo elemento del array
frutas.pop();
console.log(frutas);
// Agregar un elemento al inicio del array
frutas.unshift('Fresa');
console.log(frutas);
// Eliminar el primer elemento del array
frutas.shift();
console.log(frutas);
// Obtener un subarray de un array
console.log(frutas.slice(1,3));
// Reemplazar un elemento de un array
frutas[1] = 'Mango';
console.log(frutas);
// Encontrar el indice de un elemento de un array
console.log(frutas.indexOf('Mango'));
// Eliminar elementos de un array
frutas.splice(1,2);
console.log(frutas);
// Unir dos arrays
let frutas2 = ['Pera','Uva'];
//console.log(frutas.concat(frutas2));
frutas = frutas.concat(frutas2);
console.log(frutas);
// Invertir un array
console.log(frutas.reverse());
// Ordenar un array
console.log(frutas.sort());

/*
  Ejercicios de arrays
  1) Crea una función que reciba un array de numeros y los sume
  2) Crea una función que reciba un array de numeros y devuelva el mayor
  3) Crea una funcion que reciba dos arrays y compare si son iguales
*/

//1
let numeros_array = [1,5,3,2,6];

function sumar_array(numeros, suma = 0, contador = 0){
  if(contador < numeros.length){
    suma += numeros[contador]; //suma = suma + numeros[contador]
    contador++;
    sumar_array(numeros, suma, contador);
  } else {
    console.log(suma);
  }
}

sumar_array(numeros_array,1,1);

//2
function mayor_array(numeros, mayor = 0, contador = 0){
  if(contador < numeros.length){
    if(numeros[contador] > mayor){
      mayor = numeros[contador];
    }
    contador++;
    mayor_array(numeros, mayor, contador);
  } else {
    console.log(mayor);
  }
}

mayor_array(numeros_array);

/*
function mayor_sort(numeros){
  console.log(numeros.sort()[numeros.length - 1]);
}
*/

function mayor_sort(numeros){
  numeros = numeros.sort();
  console.log(numeros[numeros.length - 1]);
}

mayor_sort(numeros_array);

//3
let numeros_array2 = [1,5,3,2,6];
let numeros_array3 = [1,5,3,2,6];

function comparar_arrays(array1, array2, contador = 0){
  if(array1.length == array2.length){
    if (contador < array1.length) {
      if(array1[contador] == array2[contador]){
        if(contador == array1.length-1){
          console.log('Los arrays son iguales');
        }
        contador++;
        comparar_arrays(array1, array2, contador);
      } else {
        console.log('Los arrays no son iguales');
      }
    }
  } else {
    console.log('Los arrays no son iguales');
  }
}

comparar_arrays(numeros_array2, numeros_array3);

function comparar_arrays_simple(array1, array2){
  if(array1.toString() == array2.toString()){
    console.log('Los arrays son iguales');
  } else {
    console.log('Los arrays no son iguales');
  }
}

comparar_arrays_simple(numeros_array2, numeros_array3);

/*
  Objetos
  Los objetos son colecciones de propiedades y métodos.
  Propiedades: Son variables dentro del objeto. (Cosas que lo describen)
  Métodos: Son funciones dentro del objeto. (Cosas que puede hacer)
*/

let persona = {
  nombre: 'Juan',
  edad: 25,
  saludar: function(mensaje){
    console.log(`${this.nombre} dice: ${mensaje}`);
  }
}

console.log(persona.nombre);
console.log(persona.edad);
persona.saludar("Hola mundo");
persona.saludar("Hey!");

/*
  Funciones anonimas
  Las funciones anonimas son funciones sin nombre.
*/

let sumar_anonimo = function(a,b){
  return a + b;
}

console.log(sumar_anonimo(5,5));

// Loops (Ciclos)
/*
  Los loops son estructuras de control que nos permiten repetir
  un bloque de código varias veces.
*/
// For
let videojuegos = ['Mario','Zelda','Metroid','Pokemon'];
for(let i = 0; i < videojuegos.length; i++){
  console.log(videojuegos[i]);
}
// For of
/*
  El for of es una forma más sencilla de recorrer un array
*/
let cadena = 'Hola mundo';
for(let letra of cadena){
  console.log(letra);
}
// For in
/*
  El for in es una forma de recorrer un objeto
*/
let persona2 = {
  nombre: 'Juan',
  edad: 25,
  sexo: 'Masculino'
}
let contador = 0;
for(let propiedad in persona2){
  console.log(`${propiedad}: ${persona2[propiedad]}`);
  contador++;
  if(contador == 2){
    break;
  }
}
// While
let contador2 = 0;
while(contador2 <= 10){
  console.log(contador2);
  contador2+=2;
}

// Do while
let contador3 = 0;
do {
  console.log(contador3);
  contador3++;
} while(contador3 <= 10);


/*
  Ejericios de loops, objetos y arrays
  1) Crea una función que reciba un objeto e imprima todas sus propiedades y valores
  pero debe detenerse si encuentra la propiedad 'edad'
  2) Crea una función que reciba un array de objetos y los imprima
  3) Dado el siguiente array de objetos
  let personas = [
    {nombre: 'Juan', edad: 25, habilidades: ['Programación','Cocina']},
    {nombre: 'Carlos', edad: 30, habilidades: ['Diseño','Enseñanza']},
    {nombre: 'Ana', edad: 20, habilidades: ['Diseño','Cocina']}
  ];
  Crea una funcion que reciba el array de objetos e imprima cada una de sus nombres,
  edades y habilidades
*/

//1
let persona3 = {
  nombre: 'Juan',
  edad: 25,
  sexo: 'Masculino'
}

function imprimir_objeto(objeto){
  for(let propiedad in objeto){
    if(propiedad == 'edad'){
      break;
    }
    console.log(`${propiedad}: ${objeto[propiedad]}`);
  }
}

imprimir_objeto(persona3);

//2
let personas = [
  {nombre: 'Juan', edad: 25, sexo: 'Masculino'},
  {nombre: 'Carlos', edad: 30, sexo: 'Masculino'},
  {nombre: 'Ana', edad: 20, sexo: 'Femenino'}
];

function imprimir_personas(personas_lista){
  for(let persona of personas_lista){
    for(let propiedad in persona){
      console.log(`${propiedad}: ${persona[propiedad]}`);
    }
  }
}

imprimir_personas(personas);

//3
let personas2 = [
  {nombre: 'Juan', edad: 25, habilidades: ['Programación','Cocina']},
  {nombre: 'Carlos', edad: 30, habilidades: ['Diseño','Enseñanza']},
  {nombre: 'Ana', edad: 20, habilidades: ['Diseño','Cocina']}
];

function imprimir_personas_habilidades(personas_lista){
  for(let persona of personas_lista){
    for(let propiedad in persona){
      if(propiedad == 'habilidades'){
        console.log(`${propiedad}:`);
        for(let habilidad of persona[propiedad]){
          console.log(habilidad);
        }
      } else {
        console.log(`${propiedad}: ${persona[propiedad]}`);
      }
    }
  }
}

imprimir_personas_habilidades(personas2);

// Programación orientada a objetos
/*
  La programación orientada a objetos es un paradigma de programación
  que se basa en objetos y clases.
  Clase: Es un molde para crear objetos.
  Objeto: Es una instancia de una clase.
*/

class Personaje {
  constructor(nombre, vida, ataque){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  saludar(){
    console.log(`Hola soy ${this.nombre}`);
  }
}

let mario = new Personaje('Mario', 100, 10);
let luigi = new Personaje('Luigi', 100, 10);
let bowser = new Personaje('Bowser', 200, 20);

mario.saludar();
luigi.saludar();
bowser.saludar();

class Calculadora{
  sumar(a,b){
    return a + b;
  }

  restar(a,b){
    return a - b;
  }

  multiplicar(a,b){
    return a * b;
  }

  dividir(a,b){
    return a / b;
  }
}

let calculadoravar = new Calculadora();
calculadoravar.restar(5,3);

// Console
/*
  El objeto console nos permite imprimir mensajes en la consola del navegador
*/

console.log('Hola mundo');
console.error('Error');
console.warn('Advertencia');
console.clear();

/*
  Proyectos de la sección
  1) Utiliza programación orientada a objetos para crear un juego de peleas
  donde existan dos personajes y se peleen entre ellos hasta que uno de los dos
  se quede sin vida (por turnos).
  
  un personaje tiene nombre, vida y ataque, defensa
  
  Cada turno se debe imprimir el daño que se le hace al personaje y la vida que le queda
  a cada uno. Al final se debe imprimir el ganador.

  Los personajes deben tener un metodo que les permita atacar a otro personaje
  y un metodo que les permita defenderse.

  Deben ejecutar uno de los dos metodos de forma aleatoria.
  Y quien ataca o defiende primero debe ser aleatorio.

  La defensa lo que hace es sumar +3 de vida al personaje que se defiende

  el ataque debe ser debe tener un porcentaje aleatorio de quitar el 100% del ataque
  del personaje que ataca

  2) Crea un programa que te permita jugar piedra, papel o tijera contra la computadora
  en programación orientada a objetos, guardar un historial de victorias y derrotas

  Fecha de entrega: 20/06/2024
*/
