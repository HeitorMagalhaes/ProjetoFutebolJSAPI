let table = document.getElementById('body-dados');


clearContent = () => {
	table.innerHTML = ``
}


listaCoachs = () => {

  $('.loading-imagem').show()
	$('.container-fluid').hide()

  clearContent()

  var coach = document.getElementById('pesquisaCoach').value;

    fetch(`https://v3.football.api-sports.io/coachs?search=${coach}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "4bdc8cfa87f9ebcca6333f6c2f3d18f3	"
        }
})
.then(response => {
	response.json().then(
		data => {

            console.log(data)


			for(var i = 0; i < data.response.length; i++){
          let dados = data.response[i]

			 table.innerHTML = table.innerHTML + 
			 `
              <div class="col-md-12">

              <div class="card cardu shadow mb-4">
                <div class="card-header py-3 text-center m-0 font-weight-bold">
                  <h2>${dados.name + ` ` + dados.lastname}</h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="id">
                        <label class="font-weight-bold">Id:</label><a> ${dados.id}</a>
                      </div>
                      <div class="idade">
                        <label class="font-weight-bold">Idade:</label><a> ${dados.age} anos</a>
                      </div>
                      <div class="nascimento">
                        <label class="font-weight-bold">Data de Nascimento:</label><a> ${dados.birth.date}</a>
                      </div>
                      <div class="altura">
                        <label class="font-weight-bold">Altura:</label><a> ${dados.height}</a>
                      </div>
                      <div class="peso">
                        <label class="font-weight-bold">Peso:</label><a> ${dados.weight}</a>
                      </div>
                      <div class="nacionalidade">
                        <label class="font-weight-bold">Nacionalidade:</label><a> ${dados.nationality}</a>
                      </div>
                      <div class="teamID">
                        <label class="font-weight-bold">Id do time:</label><a> ${dados.team.id}</a>
                      </div>
                      <div class="teamName">
                        <label class="font-weight-bold">Nome do time:</label><a> ${dados.team.name}</a>
                      </div>
                      <div class="teamFoto">
                        <label class="font-weight-bold">Logo do time:</label>
                        <br/>
                        <a class="img-coach"><img src="${dados.team.logo}"/></a>
                      </div>
                      
                    </div>
                    <div class="col-md-6 img-jogador"><img src="${dados.photo}"/></div>
                  </div>
                </div>
              </div>
              </div>
              
			`
		}
    $('.loading-imagem').hide()
		$('.container-fluid').show()
  }
	).catch(() => {})
})
.catch(err => {
	console.log(err);
});
};