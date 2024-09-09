import pywhatkit as kit
import time
"""
id = "ItSml9hdH7g4uC11pMkX80"
mensaje = "Mensaje automatizado enviado con python"

kit.sendwhatmsg_to_group(id, mensaje, 18, 53)
"""

personas = [
  {
    "nombre": "Josue Centeno",
    "telefono": "+584121201847"
  },
  {
    "nombre": "Jesus Jimenez",
    "telefono": "+584244284717"
  }
]

for persona in personas:
  mensaje = "Hola " + persona["nombre"] + ", este es un mensaje automatizado"
  kit.sendwhatmsg_instantly(persona["telefono"], mensaje, 20, True)
  time.sleep(10)

