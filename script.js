console.log("¡Bienvenido a Fútbol en Vivo!");
// Tu clave API (asegúrate de mantenerla privada)
const apiKey = '8e27fefad48244b0b6180620d150c2ad';
const urlBase = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';

// Función para obtener los resultados de las ligas
const obtenerResultados = (liga, idLiga) => {
    const url = `${urlBase}?league=${idLiga}&season=2024&live=true`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        const resultadosDiv = document.getElementById(liga);
        let resultadosHTML = `<h3>Partidos en vivo - ${liga}</h3>`;

        if (data.response.length > 0) {
            data.response.forEach(partido => {
                resultadosHTML += `
                    <p>${partido.teams.home.name} vs ${partido.teams.away.name} - ${partido.goals.home} : ${partido.goals.away}</p>
                `;
            });
        } else {
            resultadosHTML += `<p>No hay partidos en vivo en esta liga.</p>`;
        }
        
        resultadosDiv.innerHTML = resultadosHTML;
    })
    .catch(err => {
        console.error('Error:', err);
    });
}

// Funciones para obtener los resultados de cada liga
obtenerResultados('resultados-premier', 39);      // Premier League
obtenerResultados('resultados-ligamx', 80);       // Liga MX
obtenerResultados('resultados-ligaespanola', 140); // Liga Española
obtenerResultados('resultados-seriea', 135);      // Serie A
obtenerResultados('resultados-eredivisie', 88);   // Eredivisie
obtenerResultados('resultados-bundesliga', 78);   // Bundesliga
obtenerResultados('resultados-ligue1', 61);       // Ligue 1
obtenerResultados('resultados-champions', 2);     // Champions League
obtenerResultados('resultados-europa', 3);        // Europa League
