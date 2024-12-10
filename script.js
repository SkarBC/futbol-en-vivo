document.addEventListener("DOMContentLoaded", () => {
    // Lista de equipos por liga
    const ligaMX = [
        "América", "Chivas", "Cruz Azul", "Pumas", "Tigres UANL", "Monterrey", "Santos Laguna", "Puebla", "Toluca", "León",
        "Atlas", "Querétaro", "Mazatlán", "Necaxa", "Juárez", "Pachuca", "Tijuana", "San Luis"
    ];
    
    const laLiga = [
        "Real Madrid", "Barcelona", "Atlético Madrid", "Sevilla", "Real Sociedad", "Villarreal", "Athletic Bilbao", "Betis",
        "Valencia", "Celta de Vigo", "Granada", "Espanyol", "Getafe", "Mallorca", "Almería", "Osasuna", "Rayo Vallecano",
        "Elche", "Levante", "Cadiz"
    ];

    const premierLeague = [
        "Manchester United", "Manchester City", "Liverpool", "Chelsea", "Arsenal", "Tottenham", "West Ham", "Leicester City",
        "Aston Villa", "Everton", "Wolverhampton Wanderers", "Newcastle United", "Southampton", "Brighton", "Leeds United",
        "Crystal Palace", "Brentford", "Ipswich Town", "Burnley", "Watford"
    ];

    const bundesliga = [
        "Bayern Múnich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen", "VfL Wolfsburg", "Borussia Mönchengladbach",
        "Eintracht Frankfurt", "Hoffenheim", "Freiburg", "Union Berlín", "Colonia", "Mainz 05", "Stuttgart", "Augsburgo", 
        "KSV Holstein", "VfL Bochum", "Greuther Fürth", "Augusta"
    ];

    const serieA = [
        "Juventus", "Inter de Milán", "Milan", "Roma", "Napoli", "Lazio", "Atalanta", "Fiorentina", "Torino", "Bologna",
        "Empoli", "Sampdoria", "Salernitana", "Spezia", "Genoa", "Venezia", "Cagliari", "Sampdoria", "Benevento", "Udinese"
    ];

    // Función para cargar los equipos en cada liga
    function loadTeams(liga, id) {
        const ul = document.getElementById(id);
        liga.forEach(team => {
            const li = document.createElement("li");
            li.textContent = team;
            ul.appendChild(li);
        });
    }

    // Cargar equipos en cada liga
    loadTeams(ligaMX, "liga-mx-list");
    loadTeams(laLiga, "la-liga-list");
    loadTeams(premierLeague, "premier-list");
    loadTeams(bundesliga, "bundesliga-list");
    loadTeams(serieA, "serie-a-list");
});
