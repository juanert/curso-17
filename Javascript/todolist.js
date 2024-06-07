var menu = "Bienvenido a la lista de tareas\n1. Agregar tarea\n2. Eliminar tarea\n3. Ver tareas\n";
var tareas = [];
var opcion = 0;

while (true) {
  opcion = prompt(menu);
  if (opcion === "1") {
    var tarea = prompt("Escribe la tarea");
    tareas.push(tarea);
    alert("Tarea agregada");
  } else if (opcion === "2") {
    var indice = prompt("Escribe el número de la tarea que deseas eliminar");
    tareas.splice(indice, 1);
    alert("Tarea eliminada");
  } else if (opcion === "3") {
    alert(tareas);
  }
}
