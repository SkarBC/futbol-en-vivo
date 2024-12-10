console.log("¡Bienvenido a Fútbol en Vivo!");
const apiKey = '8e27fefad48244b0b6180620d150c2ad';
const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?live=true`;

fetch(url, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(data => {
    const resultadosDiv = document.getElementById('resultados-en-vivo');
    let resultadosHTML = '<h3>Partidos en vivo</h3>';
    
    data.response.forEach(partido => {
        resultadosHTML += `
            <p>${partido.teams.home.name} vs ${partido.teams.away.name} - ${partido.goals.home} : ${partido.goals.away}</p>
        `;
    });
    
    resultadosDiv.innerHTML = resultadosHTML;
})
.catch(err => {
    console.error('Error:', err);
});
