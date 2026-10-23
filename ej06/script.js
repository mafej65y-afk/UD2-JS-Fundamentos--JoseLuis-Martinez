"use strict";

/*
  Ejercicio 6 - Operadores aritméticos
  Parte 1: mini calculadora que pide dos números y muestra suma, resta,
  multiplicación, división, resto (%) y potencia (**).
  Parte 2: incremento y decremento (prefijo y sufijo) y asignaciones compuestas.
*/

// --- Parte 1: mini calculadora ---
const firstNumber = Number(prompt("Primer número:"));
const secondNumber = Number(prompt("Segundo número:"));

// Si alguno no es un número válido, Number() devuelve NaN
if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    alert("Debes introducir dos números válidos.");
} else {
    const results = `Resultados con ${firstNumber} y ${secondNumber}:
Suma: ${firstNumber + secondNumber}
Resta: ${firstNumber - secondNumber}
Multiplicación: ${firstNumber * secondNumber}
División: ${firstNumber / secondNumber}
Resto: ${firstNumber % secondNumber}
Potencia: ${firstNumber ** secondNumber}`;

    // Nota: dividir entre 0 da Infinity y el resto entre 0 da NaN
    alert(results);
    console.log(results);
}

// --- Parte 2: incremento y decremento ---
let counter = 5;

/*
  counter++ (sufijo): primero DEVUELVE el valor actual y después incrementa.
  ++counter (prefijo): primero INCREMENTA y después devuelve el valor nuevo.
  Por eso los dos alert muestran valores distintos aunque ambos sumen 1.
*/
alert(counter++); // Muestra 5 (devuelve el valor antiguo); counter pasa a valer 6
alert(++counter); // counter pasa a 7 y muestra 7 (devuelve el valor nuevo)

console.log(counter--); // Muestra 7; después counter pasa a 6
console.log(--counter); // counter pasa a 5 y muestra 5

// --- Asignaciones compuestas ---
let total = 10;

total += 5;  // Equivale a total = total + 5  -> 15
console.log(`Después de += 5: ${total}`);

total *= 2;  // Equivale a total = total * 2  -> 30
console.log(`Después de *= 2: ${total}`);

total -= 4;  // Equivale a total = total - 4  -> 26
console.log(`Después de -= 4: ${total}`);
