let operacion = ""

function agregar(caracter){
  operacion += caracter;
  //operacion = operacion + caracter
  document.querySelector("#calculo").value = operacion
}

function limpiar(){
  operacion = "";
  document.querySelector("#calculo").value = operacion
}

function borrar(){
  operacion = operacion.slice(0, operacion.length-1)
  document.querySelector("#calculo").value = operacion
}

function calcular(){
  operacion = String(eval(operacion))
  document.querySelector("#calculo").value = operacion
}