"use strict";

/*
  Ejercicio 2 - Variables y constantes
  Declaramos variables con let (su valor puede cambiar) y constantes con const
  (no se pueden reasignar). Distinguimos dos tipos de constantes:
  - COLOR_FAVORITO: valor fijo conocido antes de ejecutar -> MAYÚSCULAS.
  - loadTime: valor calculado en tiempo de ejecución -> camelCase.
*/

// Variables con los datos del usuario (una por línea, nombres en camelCase)
let userName = "José Luis";
let age = 20;
let city = "Madrid";

// Constante "fija": se conoce de antemano, por convenio va en mayúsculas
const COLOR_FAVORITO = "#3498DB";

// Constante calculada al ejecutar el script (milisegundos desde el 1/1/1970)
const loadTime = Date.now();

// Mostramos todos los datos
alert("Nombre: " + userName);
alert("Edad: " + age);
alert("Ciudad: " + city);
alert("Color favorito: " + COLOR_FAVORITO);
alert("Momento de carga (ms): " + loadTime);

// Intento de reasignar una constante (comentado porque detiene el script):
// COLOR_FAVORITO = "#FF0000";
// Error en consola: Uncaught TypeError: Assignment to constant variable.
// Las constantes declaradas con const no admiten un nuevo valor.
