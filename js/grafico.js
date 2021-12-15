async function CriaGrafico() {


    var ctx = document.getElementById('myBarChart');
    const response = await fetch("https://v3.football.api-sports.io/players/topscorers?season=2020&league=61", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "4bdc8cfa87f9ebcca6333f6c2f3d18f3"
        }
    })
    const json = await response.json();

    console.log(json);
    console.log(json.response[0].statistics[0].goals.total);

    let dadosGraph = [], labelX = [];

    for (let i = 0; i < json.response.length; i++) {
        labelX.push(json.response[i].player.name)
        dadosGraph.push(json.response[i].statistics[0].goals.total)
        
    }

    var chartGraph = new Chart(ctx, {

        type: 'bar',

        data: {

            labels: labelX,

            datasets: [{
                label: "Total de gols feitos",
                data: dadosGraph,
                borderColor: "#4e73df",
                borderWidth: 1,
                backgroundColor: "#4e73df"
            }]
        }
    })

}

async function CriaGrafico2() {


    var ctx = document.getElementById('myBarChart2');
    const response = await fetch("https://v3.football.api-sports.io/players/topassists?season=2020&league=61", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "4bdc8cfa87f9ebcca6333f6c2f3d18f3"
        }
    })
    const json = await response.json();

    let dadosGraph = [], labelX = [];

    for (let i = 0; i < json.response.length; i++) {
        labelX.push(json.response[i].player.name)
        dadosGraph.push(json.response[i].statistics[0].goals.assists)
        
    }

    var chartGraph = new Chart(ctx, {

        type: 'bar',

        data: {

            labels: labelX,

            datasets: [{
                label: "Total de assistências dadas",
                data: dadosGraph,
                borderColor: "#4e73df",
                borderWidth: 1,
                backgroundColor: "#4e73df"
            }]
        }
    })

}


CriaGrafico()
CriaGrafico2()