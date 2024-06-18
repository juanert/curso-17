class JuegoDados {
  constructor(numero = 0) {
    this.dado = 0;
    this.numero = numero;
  }

  lanzarDados() {
    this.dado = Math.floor(Math.random() * 6) + 1;
    alert(`Dado ${this.numero}: ${this.dado}`);
  }
}

let dado1 = new JuegoDados(1);
let dado2 = new JuegoDados(2);
let dado3 = new JuegoDados(3);

while (true) {
  dado1.lanzarDados();
  dado2.lanzarDados();
  dado3.lanzarDados();

  if(dado1.dado == dado2.dado && dado2.dado == dado3.dado){
    alert('Empate');
  } else if(dado1.dado > dado2.dado && dado1.dado > dado3.dado){
    alert('Gana dado 1');
  } else if(dado2.dado > dado1.dado && dado2.dado > dado3.dado){
    alert('Gana dado 2');
  } else {
    alert('Gana dado 3');
  }

  let continuar = confirm('Desea lanzar los dados de nuevo?');
  if (!continuar) {
    break;
  }
}
