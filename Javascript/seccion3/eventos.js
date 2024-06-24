/*
//Primera forma de hacer un evento (Creo una funcion y la llamo en HTML)
function alerta() {
  document.getElementById("texto").innerHTML = "Alerta activada";
}
*/

// Segunda forma de hacer un evento (Creo un evento en JS) y lo asigno a un elemento 
//HTML
document.getElementById("alerta").addEventListener("click", function() {
  document.getElementById("texto").innerHTML = "Alerta activada";
});

function modificar_texto(){
  let texto = document.getElementById("input").value;
  document.getElementById("texto").innerHTML = texto;
}

/*
  Algunas propiedades o metodos de document importantes
  document.getElementById("id") -> Devuelve un elemento por su id
  document.getElementsByClassName("clase") -> Devuelve un arreglo (Array) de elementos por su clase
  document.getElementsByTagName("etiqueta") -> Devuelve un arreglo (Array) de elementos por su etiqueta
  document.querySelector("selector") -> Devuelve el primer elemento que cumpla con el selector
  document.querySelectorAll("selector") -> Devuelve todos los elementos que cumplan con el selector
  document.createElement("etiqueta") -> Crea un elemento HTML
  element.appendChild(elemento) -> Agrega un elemento como hijo de otro
  element.innerHTML -> Devuelve o establece el contenido HTML de un elemento
  element.innerText -> Devuelve o establece el contenido de texto de un elemento
  element.style -> Devuelve un objeto con los estilos de un elemento
  element.addEventListener("evento", funcion) -> Agrega un evento a un elemento
  element.removeChild(elemento) -> Elimina un elemento hijo de otro
  element.replaceChild(nuevo, viejo) -> Reemplaza un elemento hijo por otro
  element.classList -> Devuelve un objeto con las clases de un elemento
  element.classList.add("clase") -> Agrega una clase a un elemento
  element.classList.remove("clase") -> Elimina una clase de un elemento
  element.classList.toggle("clase") -> Agrega o elimina una clase de un elemento
  element.classList.contains("clase") -> Devuelve true si un elemento tiene una clase
*/

/*
  Ejercicio
  Utiliza tailwind y JS para crear una pagina web con modo oscuro y modo claro.
  Al presionar un boton se debe cambiar el modo de la pagina.
*/