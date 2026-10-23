"use strict";

/*
  Ejercicio 8 - Condicionales: if, else if, else y ternario
  Pedimos una nota de 0 a 10, validamos que sea correcta y mostramos su
  calificación con if / else if / else. Al final reescribimos una de las
  comprobaciones con el operador ternario.
*/

const gradeInput = prompt("Introduce tu nota (0-10):");

// Aceptamos coma decimal ("6,5") cambiándola por punto antes de convertir
const grade = gradeInput === null ? NaN : Number(gradeInput.trim().replace(",", "."));

// Validación: cancelado, vacío, no numérico o fuera del rango 0-10
if (gradeInput === null || gradeInput.trim() === "" || Number.isNaN(grade) || grade < 0 || grade > 10) {
    alert("Error: debes introducir un número entre 0 y 10.");
} else {
    // Calificación con if / else if / else
    let qualification;

    if (grade < 5) {
        qualification = "Suspenso";
    } else if (grade < 7) {
        qualification = "Aprobado";
    } else if (grade < 9) {
        qualification = "Notable";
    } else {
        qualification = "Sobresaliente";
    }

    alert(`Nota ${grade}: ${qualification}`);

    /*
      Versión original de la comprobación aprobado / suspenso con if / else:

      let result;
      if (grade >= 5) {
          result = "Has aprobado";
      } else {
          result = "Has suspendido";
      }
    */

    // Misma comprobación reescrita con el operador ternario:
    // condición ? valor si se cumple : valor si no se cumple
    const result = grade >= 5 ? "Has aprobado" : "Has suspendido";

    alert(result);
}
