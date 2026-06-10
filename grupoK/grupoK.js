const teams = [
    {
        nombre: "Colombia",
        pais: "País 1",
        ranking: 14,
        entrenador: "Nestor Lorenzo",
        imagen: "colombia.png"
    },
    {
        nombre: "Republica del Congo",
        pais: "País 2",
        ranking: 46,
        entrenador: "Sebastien Desabre",
        imagen: "congo.png"
    },
    {
        nombre: "Portugal",
        pais: "País 3",
        ranking: 5,
        entrenador: "Roberto Martínez",
        imagen: "portugal.png"
    },
    {
        nombre: "Uzbequiztan",
        pais: "País 4",
        ranking: "Fuera del Top 50",
        entrenador: "Fabio Cannavaro",
        imagen: "uzbe.png"
    }
];

const container = document.getElementById("teams-container");

teams.forEach(team => {

    container.innerHTML += `
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