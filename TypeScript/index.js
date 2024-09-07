"use strict";
// Variable en Javascript
var hola = "Hola mundo";
// Variable en TypeScript
var holaMundo = "Hola mundo";
var numero = 10;
var booleano = true;
var fecha = new Date();
var cualquiera = "Hola mundo";
// Arreglos
var arreglo = ["Hola", "Mundo"];
var arreglo2 = ["Hola", "Mundo"];
// Tuplas
var tupla = [1, "Hola"];
// objetos
var objeto = { nombre: "Juan", apellido: "Perez" };
// Elemento HTML
var elemento = document.body;
// null y undefined
var nulo = null;
var indefinido = undefined;
// void
function saludar3() {
    console.log("Hola mundo");
}
// Funciones
function saludar(nombre) {
    return "Hola " + nombre;
}
function saludar2(persona) {
    //return "Hola " + persona.nombre + " " + persona.apellido;
    return `Hola ${persona.nombre} ${persona.apellido}`;
}
