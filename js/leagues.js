let table = document.getElementById('tbody-dados');


clearContent = () => {
	$('#dataTable').DataTable().destroy();
	table.innerHTML = ``
}

listaLigas = () => {
	$('.loading-imagem').show()
	$('.container-fluid').hide()

	var pesquisa = document.getElementById('pesquisaLiga').value;


	fetch(`https://v3.football.api-sports.io/leagues?search=${pesquisa}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "v3.football.api-sports.io",
				"x-rapidapi-key": "4bdc8cfa87f9ebcca6333f6c2f3d18f3"
			}
		})
		.then(response => {
			response.json().then(
				data => {
					console.log(data)

					clearContent();
					for (var i = 0; i < data.response.length; i++) {

						let dados = data.response[i]

						table.innerHTML = table.innerHTML +
							`<tr>
			 	<td>${dados.league.id}</td>
			 	<td>${dados.league.name}</td>
			 	<td>${dados.league.type}</td>
			 	<td><img src="${dados.league.logo}"/></td>
			 	<td>${dados.country.name}</td>
			 	<td><img src="${dados.country.flag}"/></td>
			 </tr>`
					}
					$('.loading-imagem').hide()
					$('.container-fluid').show()
					$('#dataTable').DataTable()
				}
			).catch(() => {})
		})
		.catch(err => {
			console.log(err);
		});


};