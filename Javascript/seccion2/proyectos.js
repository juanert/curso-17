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
/*
class Personaje {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(defensor) {
    let ataque = Math.floor(Math.random() * this.ataque) + 1;
    console.log(`${this.nombre} ataca y hace: ${ataque} puntos de daño`)
    return defensor.vida -= ataque;
  }

  defender() {
    this.vida += 3;
  }
}

let goku = new Personaje('Goku', 20, 5);
let freezer = new Personaje('Freezer', 20, 6);

while(goku.vida > 0 && freezer.vida > 0) {
  let orden = Math.floor(Math.random() * 2) + 1;
  if(orden == 1) {
    turno(goku, freezer);
  } else {
    turno(freezer, goku);
  }
}

function turno(personaje1, personaje2){
  let accion = Math.floor(Math.random() * 2) + 1;
  if(accion == 1) {
    personaje2.vida = personaje1.atacar(personaje2);
    console.log(`${personaje1.nombre} ataca a ${personaje2.nombre}, su vida actual es: ${personaje2.vida}`);
    if(personaje2.vida <= 0) {
      console.log(`${personaje1.nombre} ha ganado`);
    }
  } else {
    personaje1.defender();
    console.log(`${personaje1.nombre} se defiende: ${personaje1.vida}`);
  }
}
*/
// Piedra papel o tijera

class Juego {
  constructor() {
    this.victorias = 0;
    this.derrotas = 0;
    this.partidas = []
  }

  jugar() {
    let opciones = ['piedra', 'papel', 'tijera'];
    let opcionUsuario = prompt('Elige piedra, papel o tijera').toLowerCase();
    let opcionComputadora = opciones[Math.floor(Math.random() * 3)];

    if(opcionUsuario == opcionComputadora) {
      alert('Empate');
      this.partidas.unshift('Empate');
    } else if(opcionUsuario == 'piedra' && opcionComputadora == 'tijera' ||
              opcionUsuario == 'papel' && opcionComputadora == 'piedra' ||
              opcionUsuario == 'tijera' && opcionComputadora == 'papel') {
      alert(`Ganaste, la computadora eligió ${opcionComputadora}`);
      this.victorias++;
      this.partidas.unshift('Ganaste');
    } else {
      alert(`Perdiste, la computadora eligió ${opcionComputadora}`);
      this.derrotas++;
      this.partidas.unshift('Perdiste');
    }
    alert(`Victorias: ${this.victorias}, Derrotas: ${this.derrotas} \n${this.partidas.toString()}` );
  }
}

let juego = new Juego();

while(true) {
  juego.jugar();
  let continuar = confirm('Desea jugar de nuevo?');
  if(!continuar) {
    break;
  }
}