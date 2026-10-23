"use strict";

/*
  Ejercicio 12 - ¿Cuántos días faltan para un evento especial? (versión con Date)
  Generamos un día aleatorio del mes actual entre 1 y 30 que no sea anterior a
  hoy y calculamos cuántos días faltan hasta él.
*/

const MAX_EVENT_DAY = 30;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

// Fecha actual a las 00:00 para que la diferencia sean días completos
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// Último día del mes actual (el día 0 del mes siguiente es el último de este)
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

// El evento no puede pasar del día 30 ni del último día del mes (febrero)
const maxDay = Math.min(MAX_EVENT_DAY, daysInMonth);

// Formato "20 de septiembre de 2026"
const dateFormat = { day: "numeric", month: "long", year: "numeric" };

document.write("<h2>Versión con Date</h2>");

if (today.getDate() > maxDay) {
    // Por ejemplo el día 31: no queda ningún día válido entre 1 y 30
    document.write("<p>Hoy ya no queda ningún día posible para el evento este mes.</p>");
} else {
    let eventDay;

    // Repetimos mientras el día generado sea anterior a hoy
    do {
        eventDay = Math.floor(Math.random() * maxDay) + 1; // Número entero entre 1 y maxDay
    } while (eventDay < today.getDate());

    const eventDate = new Date(today.getFullYear(), today.getMonth(), eventDay);

    // Restar dos Date da la diferencia en milisegundos: la pasamos a días
    const daysLeft = Math.round((eventDate - today) / MS_PER_DAY);

    document.write(`<p>La fecha actual es ${today.toLocaleDateString("es-ES", dateFormat)}</p>`);
    document.write(`<p>La fecha del evento: ${eventDate.toLocaleDateString("es-ES", dateFormat)}</p>`);
    document.write(`<p>Días que faltan para el evento: ${daysLeft} ${daysLeft === 1 ? "día" : "días"}</p>`);
}
