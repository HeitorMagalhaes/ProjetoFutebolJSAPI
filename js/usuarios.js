let table = document.getElementById('tbody-dados');

//#region Functions

clearTable = () =>{

    table.innerHTML =  ``

}

const openModal = () => document.getElementById('modale').classList.add('active')

const closeModal = () => {
    
    document.getElementById('modale').classList.remove('active')
}

const openModalD = () => document.getElementById('modald').classList.add('active')

const closeModalD = () => {
    
    document.getElementById('modald').classList.remove('active')
}

document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('modalCloseD').addEventListener('click', closeModalD)

const saveClient = () => {

    const client = {
        nome: document.getElementById('nomeM').value,
        email: document.getElementById('emailM').value,
        senha: document.getElementById('senhaM').value,
    }

    const index = document.getElementById('nomeM').dataset.index

    console.log(index)
    console.log(client)

    updateClient(index, client)
    closeModal()
    clearTable()
    listaUsuarios()
}

document.getElementById('salvar')
    .addEventListener('click', saveClient)


//#endregion

//#region ListaUsuarios

listaUsuarios = () => {  
    
    console.log(JSON.stringify(localStorage))

    for(var i = 0; i < getLocalStorage().length; i++){
        table.innerHTML = table.innerHTML +
    `
    <tr>
        <td>${getLocalStorage()[i].nome}</td>
        <td>${getLocalStorage()[i].email}</td>
        <td>${getLocalStorage()[i].senha}</td>
        <td>
            <button type="button" id="edit-${i}" class="btn btn-warning " data-action="edit">
                Editar
            </button>
            <button type="button" id="delete-${i}" class="btn btn-danger " data-action="delete">
                Deletar
            </button>
        </td>
    </tr>
    `
    }
    
    $('#dataTable').DataTable()
    
}

//#endregion

//#region Update Usuario

const updateClient = (index, client) => {
    const dbClient = getLocalStorage()
    dbClient[index] = client
    setLocalStorage(dbClient)
    clearNome()
    Nome()
}

//#endregion

//#region delete

const deleteClient = (index) => {
    const dbClient = getLocalStorage()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
    clearTable()
    listaUsuarios()
    closeModalD()
}

//#endregion

//#region direcionamento dos botoes


//#region functions

const fillFields = (client) => {
    console.log(client)
    document.getElementById('nomeM').value = client.user.nome
    document.getElementById('emailM').value = client.user.email
    document.getElementById('senhaM').value = client.user.senha
    document.getElementById('nomeM').dataset.index = client.index
}

editClient = (index) =>{
    const client = {
        index: index,
        user: getLocalStorage()[index]
    }
    fillFields(client)
    openModal()
}

apagaUsuario = (index) =>{
    
    var btnexcluir = document.getElementById('excluirD')

    openModalD()
    btnexcluir.addEventListener('click', () => deleteClient(index))
    
}

//#endregion

const editDelete = (event) =>{
    if(event.target.type == "button"){

        const [action, index] = event.target.id.split("-")
        if(action == 'edit'){
            editClient(index)
        }else{

            if(index == localStorage.getItem("NomePage")){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Você não pode apagar o usuário logado!',
                  })
            }else{
                apagaUsuario(index)
            }
            
        }
    }else{
        console.log("aaaa")
    }
}
//#endregion

//#region Chamando direcionamento de botao
document.querySelector('#dataTable>tbody')
    .addEventListener('click', editDelete)
//#endregion