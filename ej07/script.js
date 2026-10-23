"use strict";

/*
  Ejercicio 7 - Operadores de comparación: igualdad estricta
  Evaluamos varias comparaciones y mostramos su resultado en una lista.
  Cada comparación lleva un comentario explicando el porqué del resultado.
*/

// Escribe en la página una comparación (como texto) y su resultado
function showComparison(expression, result) {
    document.write(`<li><code>${expression}</code> → <strong>${result}</strong></li>`);
}

document.write("<h2>Resultados de las comparaciones</h2>");
document.write("<ol>");

// true: comparación numérica normal
showComparison("2 > 1", 2 > 1);

// true: con > el string "2" se convierte a número 2, y 2 > 1
showComparison('"2" > 1', "2" > 1);

// true: == convierte "01" a número 1 antes de comparar
showComparison('"01" == 1', "01" == 1);

// true: == convierte false a número 0, y 0 == 0
showComparison("0 == false", 0 == false);

// true: == convierte "" a 0 y false a 0
showComparison('"" == false', "" == false);

// false: === no convierte tipos; number y boolean son tipos distintos
showComparison("0 === false", 0 === false);

// true: regla especial del lenguaje, null y undefined solo son == entre sí
showComparison("null == undefined", null == undefined);

// false: con === son tipos distintos (null y undefined)
showComparison("null === undefined", null === undefined);

// false: en comparaciones con > null se convierte a 0, y 0 > 0 es falso
showComparison("null > 0", null > 0);

// true: null se convierte a 0, y 0 >= 0 es verdadero
// (curioso: null == 0 es false, porque == no convierte null a número)
showComparison("null >= 0", null >= 0);

// false: undefined solo es == a null (o a sí mismo), nunca a 0
showComparison("undefined == 0", undefined == 0);

// true: los strings se comparan letra a letra (orden Unicode):
// "G" = "G", "l" = "l", y "o" va después que "e", así que "Glow" es mayor
showComparison('"Glow" > "Glee"', "Glow" > "Glee");

// false: === entre string y number nunca es true, aunque "5" parezca 5
showComparison('"5" === 5', "5" === 5);

// false: NaN es el único valor que no es igual ni a sí mismo
showComparison("NaN == NaN", NaN == NaN);

document.write("</ol>");

/*
  Conclusión: == convierte los tipos antes de comparar y da resultados poco
  intuitivos; === compara valor y tipo sin conversiones, por eso es el
  recomendado.
*/
