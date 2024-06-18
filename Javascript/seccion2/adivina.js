class AdivinaElNumero{

  constructor(){
    this.numero_aleatorio = Math.floor(Math.random() * 100) + 1;
    this.vidas = 10;
    this.historial = [];
  }

  adivinar(numero){
    if(numero == this.numero_aleatorio){
      alert('Adivinaste el numero');
      return true;
    } else if(numero > this.numero_aleatorio){
      alert('El numero es menor');
    } else {
      alert('El numero es mayor');
    }
    this.historial.unshift(numero);
    alert(this.historial);
    this.vidas--;
    if(this.vidas == 0){
      alert('Se acabaron los intentos');
      return true;
    }
    return false;
  }

  historial(){
    alert(this.historial);
  }
}

let adivina = new AdivinaElNumero();
while(adivina.vidas > 0){
  let numero = prompt('Ingresa un numero');
  if(adivina.adivinar(numero)){
    break;
  }
}