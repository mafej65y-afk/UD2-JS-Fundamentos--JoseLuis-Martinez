"use strict";

/*
  Ejercicio 4 - Plantillas de texto con backticks
  Pedimos nombre, ciudad y año de nacimiento con prompt y mostramos un mensaje
  de bienvenida con una plantilla de texto (backticks y ${...}).
  Si el usuario pulsa Cancelar, prompt devuelve null y lo tratamos aparte.
*/

// Pedimos los datos al usuario
const userName = prompt("¿Cómo te llamas?");
const city = prompt("¿En qué ciudad vives?");
const birthYear = prompt("¿En qué año naciste?");

// Año actual calculado en tiempo de ejecución
const currentYear = new Date().getFullYear();

// Si se pulsó Cancelar en cualquiera de los prompt, el valor es null
if (userName === null || city === null || birthYear === null) {
    alert("Has cancelado. No se puede mostrar el mensaje de bienvenida.");
} else {
    // Dentro de ${...} puede ir cualquier expresión: aquí calculamos la edad
    const welcomeMessage = `¡Bienvenido, ${userName}!
Vives en ${city} y este año cumples ${currentYear - Number(birthYear)} años.`;

    alert(welcomeMessage);
}
