#Open the browser and go to the wikidia and search for the topic you want to search for
import time
from selenium import webdriver

driver = webdriver.Chrome()  # Optional argument, if not specified will search path.
driver.get('http://www.google.com/');
time.sleep(10) # Let the user actually see something!
try:
  search_box = driver.find_element(by='name', value='q')
  search_box.send_keys('ChromeDriver')
  search_box.submit()
  time.sleep(5) # Let the user actually see something!
except:
  print("Elemento no conseguido")
driver.quit()

"""
  Proyecto de Python
  - Crea un programa que tenga un menu 
  1. Registrar usuario
  2. Eliminar usuario por id
  3. Actualizar usuario por id
  4. Ver usuarios
  5. Salir

  El usuario debe suministrar nombre, apellido, correo, telefono
  El programa se debe de ejecutar infinitamente hasta que el usuario decida salir
  El programa debe de almacenar los usuarios en un archivo de texto (Cada usuario debe ir en una linea del archivo)
  El programa debe de poder eliminar un usuario por id
  El programa debe de poder actualizar un usuario por id
  El programa debe de poder ver todos los usuarios
  El programa debe de poder manejar errores
  El programa debe de ser orientado a objetos
  Debes validar la entrada de datos

  Puntos opcionales:
  - Al registrar un usuario enviar un correo electronico de bienvenida y un whatsapp
  - Crear una interfaz grafica para el programa (Investigar Tkinter u otras librerias)
  - Crea un .exe del programa

  Fecha de entrega: 15/09/2024
"""