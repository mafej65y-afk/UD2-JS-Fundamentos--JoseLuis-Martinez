"use strict";

/*
  Ejercicio 3 - Tipos de datos y typeof
  Creamos una variable de cada tipo básico (los 7 primitivos) y un objeto.
  Para cada una mostramos en una lista su valor y lo que devuelve typeof.
*/

// Un valor de cada tipo
const edad = 20;                              // number
const numeroGrande = 9007199254740993n;       // bigint (la "n" final lo indica)
const nombre = "José Luis";                   // string
const esAlumno = true;                        // boolean
const sinValor = null;                        // null: "vacío" asignado a propósito
let sinAsignar;                               // undefined: declarada sin valor
const identificador = Symbol("id");           // symbol: valor único
const alumno = { nombre: "José Luis", edad: 20 }; // object

// Escribimos el resultado en la página como una lista
document.write("<h2>Valores y su typeof</h2>");
document.write("<ul>");
document.write("<li>" + edad + " → " + typeof edad + "</li>");
document.write("<li>" + numeroGrande + " → " + typeof numeroGrande + "</li>");
document.write("<li>" + nombre + " → " + typeof nombre + "</li>");
document.write("<li>" + esAlumno + " → " + typeof esAlumno + "</li>");
document.write("<li>" + sinValor + " → " + typeof sinValor + "</li>");
document.write("<li>" + sinAsignar + " → " + typeof sinAsignar + "</li>");
// Un Symbol no se puede concatenar directamente (da TypeError): usamos toString()
document.write("<li>" + identificador.toString() + " → " + typeof identificador + "</li>");
// Un objeto concatenado saldría como [object Object]: lo pasamos a texto con JSON.stringify
document.write("<li>" + JSON.stringify(alumno) + " → " + typeof alumno + "</li>");
document.write("</ul>");

/*
  ¿Por qué typeof null devuelve "object"?
  Es un error histórico de la primera versión de JavaScript (1995). Internamente,
  los valores se guardaban con una etiqueta de tipo y la de los objetos era 0;
  null se representaba como un puntero nulo (todo ceros), así que typeof lo
  identificaba como objeto. Nunca se corrigió para no romper el código existente
  en la web. Aun así, null es un tipo primitivo, no un objeto.
  Para comprobar si algo es null se usa: valor === null
*/
