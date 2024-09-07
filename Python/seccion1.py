import re

#Esto es un comentario de una linea
"""
Esto es un comentario de
varias lineas
"""
#Variables
nombre = "Juan"
#Tipos de datos
entero = 4
flotante = 4.5
cadena = "Hola"
booleano = True
tupla = (1,2,3,4)
lista = [1,2,3,4]
diccionario = {"nombre":"Juan","edad":25}
#Imprimir
print(nombre)
print(lista[1])
print(diccionario["nombre"])
#Operaciones
suma = 4 + 5
resta = 4 - 5
multiplicacion = 4 * 5
division = 4 / 5
modulo = 4 % 5
potencia = 4 ** 5
division_entera = 4 // 5
#Entrada de datos
nombre = input("Ingrese su nombre: ")
#condicionales
if 4 > 5:
  print("4 es mayor que 5")
elif 4 < 5:
  print("4 es menor que 5")
else:
  print("4 es igual a 5")
#Ciclos
frutas = ["manzana","pera","uva"]
for fruta in frutas:
  print(fruta)
for i in range(0,10):
  print(i)
i = 0
while i < 10:
  print(i)
  i += 1
#Funciones
def suma(a=0,b=0):
  return a + b
resultado = suma(4, 5)
print(resultado)

#Clases
class Persona:
  def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad
  def saludar(self):
    print("Hola, mi nombre es " + self.nombre)

persona = Persona("Juan", 25)
persona.saludar()

#Herencia
class Empleado(Persona):
  def __init__(self, nombre, edad, salario):
    super().__init__(nombre, edad)
    self.salario = salario
  def trabajar(self):
    print("Estoy trabajando")

empleado = Empleado("Juan", 25, 1000)
empleado.saludar()

#Regex (Expresiones regulares)
texto = "Hola, mi nombre es Juan y mi telefono es 123456789"
patron = "[0-9]{9}"
resultado = re.search(patron, texto)
print(resultado.group(0))

#Validar email
email = "hola@hola.com"
patron = "[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+"
resultado = re.search(patron, email)
if resultado:
  print("Email valido")