document.addEventListener("DOMContentLoaded", () => {
    // Datos oficiales del Grupo J del Mundial 2026
    const groupData = {
        name: "Grupo J",
        teams: [
            { name: "Argentina", flag: "🇦🇷" },
            { name: "Argelia", flag: "🇩🇿" },
            { name: "Austria", flag: "🇦🇹" },
            { name: "Jordania", flag: "🇯🇴" }
        ]
    };

    // Actualizar el título con el nombre del grupo
    const groupNameElement = document.getElementById("group-name");
    groupNameElement.textContent = groupData.name;

    // Contenedor donde irán las tarjetas
    const teamsContainer = document.getElementById("teams-container");
    
    // Generar la tarjeta (card) para cada equipo
    groupData.teams.forEach(team => {
        // Crear elementos HTML
        const card = document.createElement("div");
        card.className = "team-card";
        
        const flag = document.createElement("div");
        flag.className = "flag";
        flag.textContent = team.flag;
        
        const name = document.createElement("div");
        name.className = "team-name";
        name.textContent = team.name;
        
        // Ensamblar la tarjeta y agregarla al contenedor principal
        card.appendChild(flag);
        card.appendChild(name);
        teamsContainer.appendChild(card);
    });
});