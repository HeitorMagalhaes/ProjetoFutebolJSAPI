//#region criar conta
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

function CriarConta(event) {

    event.preventDefault()
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmasenha = document.getElementById("senha2").value;

    const dbClient = getLocalStorage()

    var objeto = {
        nome: nome,
        email: email,
        senha: senha
    }
    if(nome == "" || email == "" || senha =="" || confirmasenha == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos Inválidos!',
          })
    }else{
    if (senha == confirmasenha) {
        
        dbClient.push(objeto)
        
        // localStorage.setItem(email ,JSON.stringify(objeto))     
        setLocalStorage(dbClient)
           
        Swal.fire({
            title: 'Confirmado!',
            text: "Sua conta foi criada com sucesso!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "login.html";
            }
          })

        

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senhas não combinam!',
          })
    }

    }
}


//#endregion

//#region Fazer Login

function clearFields(){
    var nomeU = document.getElementById("usuarioLogin");
    var senhaU = document.getElementById("senhaLogin")

    nomeU.value = "";
    senhaU.value = "";
}

function Login(event) {

    event.preventDefault()
    
    var nomeU = document.getElementById("usuarioLogin").value;
    var senhaU = document.getElementById("senhaLogin").value;

    if (nomeU == "" || senhaU == ""){
        alert("Usuário e/ou senha inválidos")
    }
    else {

        for(var i = 0; i < getLocalStorage().length; i++){

            if(nomeU == getLocalStorage()[i].email && senhaU == getLocalStorage()[i].senha){
                           
                window.location.href = "index.html";

                var numPerfil = i;
                localStorage.setItem("NomePage", numPerfil)


                i = getLocalStorage().length + 1
            }else if(i == getLocalStorage().length-1){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuário e/ou senha não encontrados!',
                  })
            }
        }

    }
        
}

//#endregion

//#region GetNome

function clearNome(){
    document.getElementById('spanNome').innerHTML = ''
}

function Nome(){

    var i = localStorage.getItem("NomePage")
    document.getElementById('spanNome').innerHTML = getLocalStorage()[i].nome
}


//#endregion