/* eslint-disable */
import "bootstrap";
import "./style.css";

const excusas = [
    ["El perro se comió mi tarea", 
    "El gato se metió en la impresora", 
    "Mi hermano pequeño borró todo por accidente",
    "Tuve una emergencia familiar", 
    "Me quedé sin batería en el auto", 
    "El tráfico estuvo terrible",
    "No me di cuenta de la hora", 
    "Olvidé por completo", 
    "Me confundí con la fecha",
    "La computadora se me congeló", 
    "Internet no funcionaba", 
    "Tuve un problema con el software",
    "Me sentí mal", 
    "Tuve un dolor de cabeza terrible", 
    "No me pude concentrar"]
];

// Función para generar una excusa aleatoria
function generarExcusa() {
    const index = Math.floor(Math.random() * excusas.length);
    return excusas[index - 1];
}

// Mostrar la excusa inicial al cargar la página
document.getElementById("excusa").textContent = generarExcusa();

// Actualizar la excusa cada vez que se actualiza la página
window.addEventListener("beforeunload", function() {
    document.getElementById("excusa").textContent = generarExcusa();
});