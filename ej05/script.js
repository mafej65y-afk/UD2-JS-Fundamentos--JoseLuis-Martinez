"use strict";

/*
  Ejercicio 5 - Conversión de tipos
  1) Pedimos dos números con prompt y comparamos la suma correcta (convirtiendo
     a number) con la concatenación que ocurre si no convertimos.
  2) Generamos desde JS una tabla con el resultado de Number(), String() y
     Boolean() aplicados a varios valores.
*/

// --- Parte 1: suma frente a concatenación ---
const firstInput = prompt("Escribe el primer número:");
const secondInput = prompt("Escribe el segundo número:");

if (firstInput === null || secondInput === null) {
    document.write("<p>Has cancelado la introducción de números.</p>");
} else {
    // prompt devuelve texto, así que + concatena: "2" + "3" = "23"
    const concatenation = firstInput + secondInput;

    // Convertimos a número antes de sumar: 2 + 3 = 5
    const sum = Number(firstInput) + Number(secondInput);

    document.write("<h2>Suma frente a concatenación</h2>");
    document.write(`<p>Sin convertir (concatenación): ${concatenation}</p>`);
    document.write(`<p>Convirtiendo con Number() (suma): ${sum}</p>`);
    // Si se escribe algo que no es un número, Number() devuelve NaN (Not a Number)
}

// --- Parte 2: tabla de conversiones ---
const values = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];

/*
  Muestra un valor tal y como se escribiría en el código:
  los strings entre comillas para que se vean los espacios y el string vacío.
*/
function showValue(value) {
    return typeof value === "string" ? `"${value}"` : String(value);
}

document.write("<h2>Tabla de conversiones</h2>");
document.write("<table border='1' cellpadding='6'>");
document.write("<tr><th>Valor</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>");

// Recorremos los valores y generamos una fila por cada uno
for (const value of values) {
    document.write(`<tr>
        <td>${showValue(value)}</td>
        <td>${Number(value)}</td>
        <td>"${String(value)}"</td>
        <td>${Boolean(value)}</td>
    </tr>`);
}

document.write("</table>");

/*
  Observaciones:
  - Number() ignora los espacios de los extremos: " 45 " -> 45.
  - Number("abc") -> NaN; Number("") -> 0; Number(null) -> 0; Number(undefined) -> NaN.
  - Boolean() solo da false con los valores "falsy": 0, "", null, undefined, NaN y false.
    Ojo: el string "0" no está vacío, así que Boolean("0") es true.
*/
