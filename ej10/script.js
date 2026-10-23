"use strict";

/*
  Ejercicio 10 - Bucles y switch: mini aplicación final
  Menú que se repite hasta que el usuario elige 0 (Salir). Cada opción se
  resuelve con switch y usa un tipo de bucle distinto.
*/

const MENU = `Elige una opción:
1 - Tabla de multiplicar
2 - Sumar números
3 - Impares del 1 al 20
4 - Cuenta atrás
0 - Salir`;

let option;

// Bucle do...while: el menú se muestra al menos una vez y se repite hasta elegir 0
do {
    option = prompt(MENU);

    // Si se pulsa Cancelar en el menú, lo tratamos como "Salir"
    if (option === null) {
        option = "0";
    }

    switch (option.trim()) {
        case "1": {
            // Bucle for: sabemos de antemano que hay 10 repeticiones
            const number = Number(prompt("¿De qué número quieres la tabla?"));
            let table = `Tabla del ${number}:\n`;

            for (let i = 1; i <= 10; i++) {
                table += `${number} x ${i} = ${number * i}\n`;
            }

            alert(table);
            break;
        }

        case "2": {
            // Bucle while(true) con break: no sabemos cuántos números va a introducir
            let sum = 0;

            while (true) {
                const input = prompt(`Suma actual: ${sum}\nIntroduce un número (vacío o Cancelar para terminar):`);

                // Salimos del bucle si cancela o deja el campo vacío
                if (input === null || input.trim() === "") {
                    break;
                }

                const value = Number(input);

                if (Number.isNaN(value)) {
                    alert("Eso no es un número, se ignora.");
                } else {
                    sum += value;
                }
            }

            alert(`La suma total es ${sum}`);
            break;
        }

        case "3": {
            // Bucle for con continue: saltamos los pares
            let oddNumbers = "";

            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue; // Si es par, pasamos a la siguiente vuelta sin añadirlo
                }
                oddNumbers += `${i} `;
            }

            alert(`Impares del 1 al 20: ${oddNumbers}`);
            break;
        }

        case "4": {
            // Bucle do...while: la cuenta atrás muestra al menos el número inicial
            let current = Number(prompt("¿Desde qué número empiezo la cuenta atrás?"));

            if (Number.isNaN(current) || current < 0) {
                alert("Debes introducir un número mayor o igual que 0.");
                break;
            }

            current = Math.floor(current); // Usamos la parte entera
            let countdown = "";

            do {
                countdown += `${current} `;
                current--;
            } while (current >= 0);

            alert(`Cuenta atrás: ${countdown}`);
            break;
        }

        case "0":
            alert("¡Hasta luego!");
            break;

        default:
            // Cualquier valor que no sea una opción del menú
            alert(`"${option}" no es una opción válida.`);
    }
} while (option.trim() !== "0");
