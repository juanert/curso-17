<?php
  #Comentarios de una linea
  /*Comentarios de
  varias lineas */
  //Comentario de una linea
  //Variables
  $nombre = "Juan";
  //Tipos de datos
  $nombre = "Juan"; //String
  $edad = 18; //Integer
  $edad = 18.5; //Float
  $edad = true; //Boolean
  $edad = (20 > 18); //Boolean
  $edad = array("Juan", "Pedro", "Carlos"); //Array
  $edad = ["Juan", "Pedro", "Carlos"]; //Array
  $edad = null; //Null
  $edad = ["nombre" => "Juan", "edad" => 18]; //Array asociativo

  //Operadores
  $edad = 18;
  $edad = $edad + 1;
  $edad = $edad - 1;
  $edad = $edad * 2;
  $edad = $edad / 2;
  $edad = $edad % 2;
  $edad = $edad ** 2;
  $edad += 3;
  $edad++;
  $edad--;
  $edad = $edad . " años";

  //Concatenacion
  $nombre = "Juan";
  $edad = 18;
  $texto = "Hola, mi nombre es " . $nombre . " y tengo " . $edad . " años";
  $texto = "Hola, mi nombre es $nombre y tengo $edad años";

  //Condicionales
  $edad = 18;
  if($edad >= 18){
    echo "Eres mayor de edad";
  } else if($edad >= 16){
    echo "Eres adolescente";
  } else {
    echo "Eres menor de edad";
  }

  //switch
  $dia = "Lunes";
  switch($dia){
    case "Lunes":
      echo "Hoy es Lunes";
      break;
    case "Martes":
      echo "Hoy es Martes";
      break;
    default:
      echo "Hoy es otro dia";
  }

  //Ciclos (Loops)
  //For
  for($i = 0; $i < 10; $i++){
    echo "El valor de i es: $i <br>";
  }

  //While
  $i = 0;
  while($i < 10){
    echo "El valor de i es: $i <br>";
    $i++;
  }

  //Do While
  $i = 0;
  do{
    echo "El valor de i es: $i <br>";
    $i++;
  } while($i < 10);

  //Foreach
  $nombres = ["Juan", "Pedro", "Carlos"];
  foreach($nombres as $nombre){
    echo "El nombre es: $nombre <br>";
  }

  //Funciones
  function saludar(){
    echo "Hola";
  }
  saludar();

  //Funciones con parametros
  function saludar2($nombre = "Juan"){
    echo "Hola $nombre";
  }
  saludar2("Juan");

  //Funciones con retorno
  function sumar($a, $b){
    return $a + $b;
  }
  $resultado = sumar(2, 3);
  echo "El resultado es: $resultado";

  //Actualizar un array
  $nombres = ["Juan", "Pedro", "Carlos"];
  $nombres[1] = "Josue";

  //Metodos de un array
  $nombres = ["Juan", "Pedro", "Carlos"];
  $nombres[] = "Josue"; //Agregar un elemento al final
  array_push($nombres, "Josue"); //Agregar un elemento al final
  array_pop($nombres); //Eliminar el ultimo elemento
  array_shift($nombres); //Eliminar el primer elemento
  array_unshift($nombres, "Josue"); //Agregar un elemento al principio
  $nombres = array_reverse($nombres); //Invertir el array
  $nombres = array_slice($nombres, 1, 2); //Extraer un rango de elementos
  $nombres = array_splice($nombres, 1, 2); //Eliminar un rango de elementos
  var_dump($nombres); //Imprimir el array
  $nombres = array_merge($nombres, ["Josue", "Carlos"]); //Unir dos arrays
  $nombres = array_unique($nombres); //Eliminar elementos duplicados
  $nombres = array_values($nombres); //Imprimir los valores del array
  $nombres = array_keys($nombres); //Obtener las llaves del array
  $nombres = array_search("Pedro", $nombres); //Buscar un elemento en el array
  $nombres = count($nombres); //Contar los elementos del array
  $nombres = sort($nombres); //Ordenar el array de menor a mayor
  $nombres = rsort($nombres); //Ordenar el array de mayor a menor
  $nombres = asort($nombres); //Ordenar el array asociativo de menor a mayor
  $nombres = arsort($nombres); //Ordenar el array asociativo de mayor a menor
  $nombres = ksort($nombres); //Ordenar el array por llaves de menor a mayor
  $nombres = krsort($nombres); //Ordenar el array por llaves de mayor a menor

  //Expresiones regulares
  $texto = "Hola, mi nombre es Juan";
  $patron = "/Juan/";
  if(preg_match($patron, $texto)){
    echo "Se encontro la palabra";
  } else {
    echo "No se encontro la palabra";
  }

  //Variables superglobales
  /*
  $_GET: Recibir datos de un formulario por URL
  $_POST: Recibir datos de un formulario de manera segura
  $_REQUEST: Recibir datos de un formulario por URL o POST
  $_FILES: Recibir archivos de un formulario
  $_COOKIE: Recibir cookies
  $_SESSION: Recibir sesiones
  $_SERVER: Recibir informacion del servidor
  $_ENV: Recibir variables de entorno
  */

  // Programacion orientada a objetos
  class Persona {
    public $nombre;
    public $edad;

    public function __construct($nombre, $edad){
      $this->nombre = $nombre;
      $this->edad = $edad;
    }

    public function saludar(){
      echo "Hola, mi nombre es $this->nombre y tengo $this->edad años";
    }
  }

  $juan = new Persona("Juan", 18);
  $juan->saludar();

  //Herencia
  class Estudiante extends Persona {
    public $carrera;

    public function __construct($nombre, $edad, $carrera){
      parent::__construct($nombre, $edad);
      $this->carrera = $carrera;
    }

    public function estudiar(){
      echo "Estoy estudiando";
    }
  }

  $juan = new Estudiante("Juan", 18, "Informatica");
?>