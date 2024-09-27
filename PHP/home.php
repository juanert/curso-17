<?php
  session_start();
  if(!isset($_SESSION["email"])){
    header("Location: login.php");
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <?php
    if(isset($_SESSION["email"])){
      echo "Bienvenido " . $_SESSION["email"];
      //cerrar sesión
      echo "<br><a href='./cerrar_sesion.php'>Cerrar sesión</a>";
    } else {
      echo "No has iniciado sesión";
    }
  ?>
</body>
</html>