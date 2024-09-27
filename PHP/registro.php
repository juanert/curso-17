<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro</title>
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
      //encriptar contraseña con MD5
      $password = md5($password);
      $sql = "INSERT INTO usuarios_registrados (email, password) VALUES ('$email', '$password')";
      if($conexion->query($sql) === TRUE){
        echo "<br>Se ha registrado correctamente";
      } else {
        echo "<br>Error: " . $sql . "<br>" . $conexion->error;
      }
    }
  ?>
</body>
</html>