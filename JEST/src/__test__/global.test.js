//Mi primera prueba unitaria
test("Probar cadenas de texto", () => {
  const text = "Hola mundo";
  expect(text).toMatch(/Hola/);
});

//Pruebas unitarias con funciones
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

test("Probar una función de callback", () => {
  expect(reverseString("Hola")).toBe("aloH");
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  //data.two = 2;
  expect(data).toEqual({one: 1, two: 2});
});

/*
  Crea un test unitario que verifique que el siguiente objeto:
  {
    nombre: "Jhon Doe",
    edad: 32,
    email: "hola@hola.com",
    cedula: "12345678"
    numero_telefono: "12345678"
  }

  Contenga las propiedades nombre, edad, email, cedula y numero_telefono
  verifique que nombre no contenga números o caracteres especiales
  verifique que edad sea igual o mayor a 18 años
  verifique que email sea un correo válido
  verifique que cedula y numero_telefono sean números
  verifique que cedula y numero_telefono tengan una longitud minima de de 8 caracteres
  verifique que cedula y numero_telefono tengan una longitud máxima de de 15 caracteres
*/