/* ===================================
   PRELOADER
=================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const preloader = document.getElementById("preloader");

        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);

    }, 2000);

});

/* ===================================
   CONTADOR / ESTADO MUNDIAL 2026
=================================== */

const fechaMundial = new Date("June 11, 2026 00:00:00").getTime();

const actualizarContador = () => {

    const ahora = new Date().getTime();

    const distancia = fechaMundial - ahora;

    const contador = document.getElementById("contador");

    if (contador) {
        // Si el Mundial ya comenzó o está en curso, mostramos el estado actual
        if (distancia < 0) {
            contador.innerHTML = `⚽ ¡El Mundial 2026 está en marcha! Sigue la acción del Grupo K`;
            return;
        }

        const dias = Math.floor(
            distancia / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (distancia % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutos = Math.floor(
            (distancia % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const segundos = Math.floor(
            (distancia % (1000 * 60))
            / 1000
        );

        contador.innerHTML =
            `🏆 ${dias} días ${horas}h ${minutos}m ${segundos}s`;

    }

};

setInterval(actualizarContador, 1000);
actualizarContador();

/* ===================================
   ANIMACIÓN AL HACER SCROLL
=================================== */

const elementos = document.querySelectorAll(
    ".equipo-card, .table, .card"
);

const mostrarElementos = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0px)";

        }

    });

};

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

/* ===================================
   NAVBAR DINÁMICA
=================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("shadow-lg");

    } else {

        navbar.classList.remove("shadow-lg");

    }

});

/* ===================================
   BOTÓN VOLVER ARRIBA
=================================== */

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "⬆";

botonArriba.id = "btnArriba";

document.body.appendChild(botonArriba);

Object.assign(botonArriba.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "#0029F8",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    zIndex: "999"
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ===================================
   EFECTO EN TARJETAS
=================================== */

const tarjetas = document.querySelectorAll(".equipo-card");

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform =
            "translateY(-10px) scale(1.03)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform =
            "translateY(0px) scale(1)";

    });

});

/* ===================================
   MENSAJE DE BIENVENIDA
=================================== */

console.log(`
====================================
⚽ GRUPO E - MUNDIAL 2026
====================================
Ecuador 🇪🇨 | Alemania 🇩🇪 | Curazao 🇨🇼 | Costa de Marfil 🇨🇮

Proyecto desarrollado con:

✅ HTML5
✅ CSS3
✅ Bootstrap 5
✅ JavaScript

¡Bienvenido al Grupo E revisado!
====================================
`);