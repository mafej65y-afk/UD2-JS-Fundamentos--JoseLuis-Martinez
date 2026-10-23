"use strict";

/*
  Ejercicio 9 - Operadores lógicos y ??
  Simulamos un formulario de alta con prompt (nombre, apodo y edad) y usamos
  ||, &&, ?? y !! para trabajar con los datos.
*/

const userName = prompt("Nombre:");
const nickname = prompt("Apodo:");
const ageInput = prompt("Edad:");
const age = Number(ageInput);

// 1. || devuelve el primer valor "truthy". Si nombre y apodo están vacíos ("")
//    o cancelados (null), ambos son falsy y se usa "Anónimo"
const displayName = userName || nickname || "Anónimo";
alert(`Usuario: ${displayName}`);

// 2. && exige que se cumplan las dos condiciones: mayor de edad Y tener nombre o apodo
if (age >= 18 && (userName || nickname)) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}

// 3. Diferencia entre || y ??
const height = 0;

// || descarta cualquier valor falsy (0, "", null, undefined, NaN, false):
// como 0 es falsy, usa el valor por defecto aunque 0 sea una altura válida
const heightWithOr = height || 170;      // 170

// ?? solo descarta null y undefined: 0 es un valor definido, así que lo respeta
const heightWithNullish = height ?? 170; // 0

alert(`Altura con ||: ${heightWithOr}
Altura con ??: ${heightWithNullish}`);

// 4. !! convierte cualquier valor a booleano (la primera ! lo niega y la segunda lo vuelve a negar)
const hasNickname = !!nickname; // true si se escribió un apodo; false si está vacío o se canceló
alert(`¿Tiene apodo? ${hasNickname}`);
