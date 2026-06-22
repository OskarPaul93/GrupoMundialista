const teams = [
    {
        nombre: "Ecuador",
        pais: "Ecuador",
        ranking: 23,
        entrenador: "Sebastián Beccacece",
        imagen: "ecu.png"
    },
    {
        nombre: "Costa de Marfil",
        pais: "Costa de Marfil",
        ranking: 38,
        entrenador: "Emerse Faé",
        imagen: "civ.png"
    },
    {
        nombre: "Curazao",
        pais: "Curazao",
        ranking: 85,
        entrenador: "Dick Advocaat",
        imagen: "cur.png"
    },
    {
        nombre: "Alemania",
        pais: "Alemania",
        ranking: 11,
        entrenador: "Julian Nagelsmann",
        imagen: "ale.png"
    }
];

const container = document.getElementById("teams-container");

// Usando la estructura optimizada para el rendimiento de la página
let htmlContent = "";

teams.forEach(team => {
    htmlContent += `
        <div class="card">
            <img src="${team.imagen}" alt="${team.nombre}">
            
            <div class="card-content">
                <h2>${team.nombre}</h2>

                <p><strong>País:</strong> ${team.pais}</p>

                <p><strong>Ranking FIFA:</strong> ${team.ranking}</p>

                <p><strong>Entrenador:</strong> ${team.entrenador}</p>
            </div>
        </div>
    `;
});

container.innerHTML = htmlContent;