<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>
<body>
  <form method="POST">
    <input type="text" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Contraseña">
    <input type="submit" value="Enviar">
  </form>
  <?php
    include "conexion.php";
    if (isset($_POST["email"]) && isset($_POST["password"])){
      $email = $_POST["email"];
      $password = $_POST["password"];
      if($email == "" || $password == ""){
        echo "Por favor llena todos los campos";
        return;
      }
      $sql = "SELECT * FROM usuarios_registrados WHERE email = '$email'";
      $resultado = $conexion->query($sql);
      if($resultado->num_rows > 0){
        $fila = $resultado->fetch_assoc();
        if($fila["password"] == md5($password)){
          echo "Bienvenido " . $email;
          session_start();
          $_SESSION["email"] = $email;
          header("Location: home.php");
        } else {
          echo "Contraseña incorrecta";
        }
      } else {
        echo "Usuario no encontrado";
      }
    }
  ?>
</body>
</html>