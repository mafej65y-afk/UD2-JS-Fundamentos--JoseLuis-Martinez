"use strict";

/*
  Ejercicio 12 - ¿Cuántos días faltan para un evento especial? (versión con Temporal)
  Mismo problema que script.js pero con la API Temporal, que trabaja con fechas
  sin hora (PlainDate) y calcula diferencias directamente.
  Temporal ya viene en Chrome y Firefox recientes. Si el navegador no lo tiene,
  cargamos un polyfill (una implementación en JavaScript de la API).
*/

const POLYFILL_URL = "https://cdn.jsdelivr.net/npm/@js-temporal/polyfill@0.5.1/+esm";

// Muestra el resultado; recibe el objeto Temporal (nativo o del polyfill)
function showEvent(TemporalApi) {
    const MAX_EVENT_DAY = 30;

    // Fecha de hoy sin hora
    const today = TemporalApi.Now.plainDateISO();

    // daysInMonth viene incluido en PlainDate
    const maxDay = Math.min(MAX_EVENT_DAY, today.daysInMonth);

    const dateFormat = { day: "numeric", month: "long", year: "numeric" };
    const output = document.querySelector("#temporal-result");

    if (today.day > maxDay) {
        output.innerHTML = "<p>Hoy ya no queda ningún día posible para el evento este mes.</p>";
        return;
    }

    let eventDay;

    // Repetimos mientras el día generado sea anterior a hoy
    do {
        eventDay = Math.floor(Math.random() * maxDay) + 1;
    } while (eventDay < today.day);

    // with() crea una fecha nueva cambiando solo el día (Temporal es inmutable)
    const eventDate = today.with({ day: eventDay });

    // until() calcula la duración entre las dos fechas
    const daysLeft = today.until(eventDate, { largestUnit: "day" }).days;

    output.innerHTML = `
        <p>La fecha actual es ${today.toLocaleString("es-ES", dateFormat)}</p>
        <p>La fecha del evento: ${eventDate.toLocaleString("es-ES", dateFormat)}</p>
        <p>Días que faltan para el evento: ${daysLeft} ${daysLeft === 1 ? "día" : "días"}</p>`;
}

if (typeof Temporal !== "undefined") {
    // El navegador tiene Temporal de forma nativa
    showEvent(Temporal);
} else {
    // No hay Temporal: importamos el polyfill y después mostramos el resultado
    import(POLYFILL_URL)
        .then((module) => showEvent(module.Temporal))
        .catch(() => {
            document.querySelector("#temporal-result").textContent =
                "Este navegador no soporta Temporal y no se pudo cargar el polyfill.";
        });
}
