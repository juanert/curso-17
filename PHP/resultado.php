<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado</title>
</head>
<body>
  <h3>Resultados</h3>
  <?php
    include "conexion.php";
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    if($nombre == "" || $apellido == ""){
      echo "Por favor llena todos los campos";
      return;
    }
    echo "Tu nombre es $nombre y tu apellido es $apellido";
    $sql = "INSERT INTO usuarios (nombre, apellido) VALUES ('$nombre', '$apellido')";
    if($conexion->query($sql) === TRUE){
      echo "<br>Se ha registrado correctamente";
    } else {
      echo "<br>Error: " . $sql . "<br>" . $conexion->error;
    }

  ?>
</body>
</html>