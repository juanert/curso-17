<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Usuarios</title>
</head>
<body>
  <?php
    include "conexion.php";
    $sql = "SELECT * FROM usuarios";
    $resultado = $conexion->query($sql);
    if($resultado->num_rows > 0){
      while($fila = $resultado->fetch_assoc()){
        echo "Nombre: " . $fila["nombre"] . " Apellido: " . $fila["apellido"] . "<br>";
      }
    } else {
      echo "No hay resultados";
    }
  ?>
</body>
</html>