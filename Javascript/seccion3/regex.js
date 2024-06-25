/*
  Regex (Expresiones regulares)
  Son patrones utilizados para encontrar una combinación de caracteres dentro 
  de una cadena de texto.
  Las expresiones regulares se conforman por patron y modificador.
  Ejemplo:
  /patron/modificador
*/

"Hola Mundo" == "hola mundo"; // false

let texto = "Hola Mundo";

// Crear una expresión regular
let expresion = /mundo/i;
// let expresion = new RegExp("mundo", "i");

// test() - Revisa si la expresión regular se encuentra en el texto
console.log(expresion.test(texto)); // true

let telefonoRegex = /^\d{7,14}$/;
console.log(telefonoRegex.test("1234567")); // true

let correoRegex = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/;

/*
  Caracteres utilizados en las expresiones regulares
  ^ - Inicio de la cadena
  $ - Final de la cadena
  [] - Grupo de caracteres permitidos
  [a-z] - Letras minúsculas
  [A-Z] - Letras mayúsculas
  [0-9] - Números
  {n} - Cantidad exacta de caracteres
  {n,} - Cantidad mínima de caracteres
  {n,m} - Cantidad mínima y máxima de caracteres
  \d - Dígitos
  \w - Caracteres alfanuméricos
  \s - Espacios en blanco
  \D - No dígitos
  \W - No caracteres alfanuméricos
  \S - No espacios en blanco
  . - Cualquier caracter
  + - Uno o más caracteres
  * - Cero o más caracteres
  ? - Cero o uno
  | - O
  () - Grupo
  \ - Caracter de escape
*/

var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
console.log(passwordRegex.test("1234")); // false

/*
  1) Crea un formulario de registro que pida:
  - Nombre
  - Correo
  - Teléfono
  - Contraseña
  - Pasaporte
  - Confirmar contraseña
  - Botón de enviar

  Este formulario debe validar que los campos no estén vacíos y que los datos
  esten correctamente validados, un nombre no puede contener caracteres especiales
  y debe tener minimo 2 caracteres, debe admitir espacios, la contraseña debe de 
  tener minimo 8 caracteres. El correo debe de tener un formato válido. El teléfono
  debe iniciar con el prefijo internacional y tener minimo 12 caracteres y maximo 20. 
  El pasaporte debe tener un formato válido. La confirmación de contraseña debe de
  ser igual a la contraseña.

  En caso de que los datos no sean válidos, se debe de mostrar un mensaje de error
  debajo del campo que no cumpla con la validación.

  2) Crea un TO-DO list que permita agregar tareas, marcarlas como completadas y
  eliminarlas.

  Nota: los ejercicios deben de ser responsive y deben de tener un diseño agradable

  Fecha de entrega: 02/07/24
*/