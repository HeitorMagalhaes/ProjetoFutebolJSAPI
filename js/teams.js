let table = document.getElementById('body-dados');

clearContent = () => {
  table.innerHTML = ``
}

listaTimes = () => {
  $('.loading-imagem').show()
  $('.container-fluid').hide()
  clearContent()

  var search = document.getElementById("pesquisaTime").value;

  fetch(`https://v3.football.api-sports.io/teams?search=${search}`, {
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

          for (var i = 0; i < data.response.length; i++) {
            let dados = data.response[i]

            table.innerHTML = table.innerHTML +
              `
			 
              <div class="contentTimes col-md-12">
              <div class="card cardu shadow mb-4">
                <div class="card-header py-3 text-center m-0 font-weight-bold">
                  <h2>${dados.team.name}</h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="id">
                        <label class="font-weight-bold">Id:</label><a> ${dados.team.id}</a>
                      </div>
                      <div class="pais">
                        <label class="font-weight-bold">País:</label><a> ${dados.team.country}</a>
                      </div>
                      <div class="fundado">
                        <label class="font-weight-bold">Fundado em:</label><a> ${dados.team.founded}</a>
                      </div>
					  <div class="estadioID">
                        <label class="font-weight-bold">Id do Estádio:</label><a> ${dados.venue.id}</a>
                      </div>
					  <div class="estadio">
                        <label class="font-weight-bold">Fundado em:</label><a> ${dados.venue.name}</a>
                      </div>
                      
                      
                    </div>
                    <div class="col-md-6 img-jogador"><img src="${dados.team.logo}"/></div>
                  </div>
                </div>
              </div>
             </div>
			 
			 `
            $('.loading-imagem').hide()
            $('.container-fluid').show()
          }
        }
      ).catch(() => {})
    })
    .catch(err => {
      console.log(err);
    });
};