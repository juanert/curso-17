var opcion = prompt("Elige una opción: piedra, papel o tijera");
var opciones = ["piedra", "papel", "tijera"];
var opcionMaquina = opciones[Math.floor(Math.random() * 3)];
console.log(opcionMaquina);

if (opcion === opcionMaquina) {
  alert("Empate");
} else if (opcion === "piedra" && opcionMaquina === "tijera" || opcion === "papel" && opcionMaquina === "piedra" || opcion === "tijera" && opcionMaquina === "papel") {
  alert("Ganaste, la computadora jugo: " + opcionMaquina);
} else {
  alert("Perdiste, la computadora jugo: " + opcionMaquina);
}