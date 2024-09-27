<?php
  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "prueba";
  $conexion = new mysqli($host, $user, $password, $database);
  if($conexion->connect_error){
    die("Error en la conexion: " . $conexion->connect_error);
  }
?>