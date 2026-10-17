const formulario = document.getElementById("formulario-reserva");
const campoFecha = document.getElementById("fecha");
const fechasOcupadasDemo = ["2026-10-20", "2026-10-25"];

function obtenerFechaLocal() {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    if (campoFecha.value < obtenerFechaLocal()) {
        alert("Selecciona una fecha futura para realizar la reserva.");
        return;
    }

    if (fechasOcupadasDemo.includes(campoFecha.value)) {
        alert("Lo sentimos, esa fecha no está disponible.");
        return;
    }

    alert("¡La fecha está disponible!");
});
