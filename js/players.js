var id = 276;

let table = document.getElementById('body-dados');
let botaoNext = document.getElementById('btn-next');
let botaoPrev = document.getElementById('btn-prev');

clearContent = () => {
  table.innerHTML = ``
}

prevPlayer = () => {
  id--;
  clearContent()
  listaPlayers()
}

nextPlayer = () => {
  id++;
  clearContent()
  listaPlayers()

}

listaPlayers = () => {
  $('.loading-imagem').show()
  $('.container-fluid').hide()

  fetch(`https://v3.football.api-sports.io/players?id=${id}&season=2020`, {
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

          let dados = data.response[0].player

          table.innerHTML =
            `
			 <br/>
			 <button id="btn-prev" onclick="prevPlayer()" class="btn btn-info btn-circle mr-3">
                <i class="fas fa-chevron-left fa-sm fa-fw  text-white-400"></i>
              </button>

              <div class="card cardu shadow mb-4">
                <div class="card-header py-3 text-center m-0 font-weight-bold">
                  <h2>${dados.name +` `+dados.lastname}</h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6 content-player">
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
                      
                    </div>
                    <div class="col-md-6 img-jogador"><img src="${dados.photo}"/></div>
                  </div>
                </div>
              </div>
              <button id="btn-next" onclick="nextPlayer()" class="btn btn-info btn-circle ml-3">
                <i class="fas fa-chevron-right fa-sm fa-fw  text-white-400"></i>
              </button>
			 `

          $('.loading-imagem').hide()
          $('.container-fluid').show()
        }

      ).catch(() => {})
    })
    .catch(err => {
      console.log(err);
    });
};