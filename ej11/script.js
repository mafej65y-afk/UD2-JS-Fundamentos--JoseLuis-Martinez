"use strict";

/*
  Ejercicio 11 - Gestor de PlayList
  La playlist es un array bidimensional: cada fila es una canción y cada
  columna un dato: [título, artista, duración en segundos, género].
*/

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

// Muestra en el documento una lista con todas las canciones y sus datos
function showPlaylist(title, list) {
    document.write(`<h3>${title}</h3>`);
    document.write("<ol start='0'>");

    for (const song of list) {
        // join une todos los datos de la fila separados por " | "
        document.write(`<li>${song.join(" | ")}</li>`);
    }

    document.write("</ol>");
}

// Acceso a un dato concreto: fila 1, columna 0
document.write(`<p>playlist[1][0] = ${playlist[1][0]} · playlist.at(1).at(0) = ${playlist.at(1).at(0)}</p>`);

// ===================== Parte 1: push y pop =====================
document.write("<h2>Parte 1: push y pop</h2>");

// 1. push añade elementos al final (cada canción es un array de 4 datos)
playlist.push(["Billie Jean", "Michael Jackson", 294, "Pop"]);
playlist.push(["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);

// 2. pop elimina el último elemento y lo devuelve: lo guardamos en una variable
const poppedSong = playlist.pop();

// 3. Añadimos un quinto dato (año) a la primera canción
playlist[0].push(1975);

// 4. Mostramos el título de la canción eliminada y la playlist resultante
document.write(`<p>Canción eliminada con pop: <strong>${poppedSong[0]}</strong></p>`);
showPlaylist("Playlist después de push y pop", playlist);

// ===================== Parte 2: splice =====================
document.write("<h2>Parte 2: splice</h2>");

// splice(posición, cuántos borrar, elementos a insertar)

// 5. Insertar en la posición 1 sin borrar nada (0 elementos eliminados)
playlist.splice(1, 0, ["Wonderwall", "Oasis", 258, "Britpop"]);

// 6. Eliminar la fila de la posición 2. splice devuelve un array con lo borrado,
//    así que cogemos su primer elemento
const splicedSong = playlist.splice(2, 1)[0];

// 7. Sustituir la canción de la posición 0: borramos 1 e insertamos otra en su lugar
playlist.splice(0, 1, ["Back in Black", "AC/DC", 255, "Rock"]);

// 8. Mostramos la canción eliminada y la playlist resultante
document.write(`<p>Canción eliminada con splice: <strong>${splicedSong.join(" | ")}</strong></p>`);
showPlaylist("Playlist después de splice", playlist);

// ===================== Parte 3: spread y copias =====================
document.write("<h2>Parte 3: spread y copias</h2>");

// 9. Copia con spread
const shallowCopy = [...playlist];
shallowCopy[0][0] = "Título cambiado en la copia superficial";

/*
  ¿Por qué cambia también la playlist original?
  [...playlist] crea un array exterior NUEVO, pero sus elementos son los mismos
  arrays internos (las canciones), porque los arrays se guardan por referencia.
  Es una copia SUPERFICIAL: shallowCopy[0] y playlist[0] apuntan a la misma
  canción, así que modificarla desde la copia la modifica también en el original.
*/
document.write(`<p>Copia superficial [0][0]: ${shallowCopy[0][0]}</p>`);
document.write(`<p>Original [0][0]: ${playlist[0][0]} ← también ha cambiado</p>`);

// 10. Copia independiente: map recorre cada canción y spread copia cada array interno
const deepCopy = playlist.map((song) => [...song]);
deepCopy[0][0] = "Título cambiado en la copia independiente";

// Ahora cada canción de la copia es un array distinto, el original no se ve afectado
document.write(`<p>Copia independiente [0][0]: ${deepCopy[0][0]}</p>`);
document.write(`<p>Original [0][0]: ${playlist[0][0]} ← no ha cambiado</p>`);

showPlaylist("Playlist original al final", playlist);
showPlaylist("Copia independiente al final", deepCopy);
