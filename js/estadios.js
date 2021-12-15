let table = document.getElementById('tbody-dados');


clearContent = () => {
  $('#dataTable').DataTable().destroy();
  table.innerHTML = ``
}


listaEstadios = () => {
  $('.loading-imagem').show()
  $('.container-fluid').hide()
  clearContent()
  var id = document.getElementById("pesquisaEstadio").value;

  fetch(`https://v3.football.api-sports.io/venues?search=${id}`, {
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
              `<tr>
           <td>${dados.id}</td>
           <td>${dados.name}</td>
           <td>${dados.address}</td>
           <td>${dados.city}</td>
           <td>${dados.country}</td>
           <td><img src="${dados.image}"/></td>
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