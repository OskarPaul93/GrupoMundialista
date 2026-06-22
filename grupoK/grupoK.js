const teams = [
    {
        nombre: "Colombia",
        ranking: 14,
        entrenador: "Nestor Lorenzo",
        imagen: "colombia.png",
        pagina: "Equipos/colombia.html"
    },
    {
        nombre: "Republica del Congo",
        ranking: 46,
        entrenador: "Sebastien Desabre",
        imagen: "congo.png",
        pagina: "Equipos/congo.html"
    },
    {
        nombre: "Portugal",
        ranking: 5,
        entrenador: "Roberto Martínez",
        imagen: "portugal.png",
        pagina: "Equipos/portugal.html"
    },
    {
        nombre: "Uzbequiztan",
        ranking: "Fuera del Top 50",
        entrenador: "Fabio Cannavaro",
        imagen: "uzbe.png",
        pagina: "Equipos/uz.html"
    }
];

const container = document.getElementById("teams-container");

teams.forEach(team => {

    container.innerHTML += `
        <div class="card">
            <a href="${team.pagina}">
                <img src="${team.imagen}" alt="${team.nombre}">
            </a>
            
            <div class="card-content">
                <h2>${team.nombre}</h2>


                <p><strong>Ranking FIFA:</strong> ${team.ranking}</p>

                <p><strong>Entrenador:</strong> ${team.entrenador}</p>
            </div>
        </div>
    `;
});