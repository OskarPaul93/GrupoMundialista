// Mensaje de bienvenida
window.onload = function() {
    alert("Bienvenido al Grupo H del Mundial");
};

// Seleccionar todos los equipos
const equipos = document.querySelectorAll(".equipo");

// Agregar eventos a cada equipo
equipos.forEach(equipo => {

    equipo.addEventListener("mouseover", () => {
        equipo.style.transform = "scale(1.1)";
        equipo.style.transition = "0.3s";
    });

    equipo.addEventListener("mouseout", () => {
        equipo.style.transform = "scale(1)";
    });

    equipo.addEventListener("click", () => {
        let nombre = equipo.querySelector("h3").textContent;

        alert(
            "Equipo seleccionado: " + nombre +
            "\nGrupo H del Mundial"
        );
    });

});

// Cambiar el color del título cada 2 segundos
const titulo = document.querySelector("h1");

const colores = ["white", "yellow", "cyan", "lime"];
let indice = 0;

setInterval(() => {
    titulo.style.color = colores[indice];
    indice++;

    if(indice >= colores.length){
        indice = 0;
    }
}, 2000);

