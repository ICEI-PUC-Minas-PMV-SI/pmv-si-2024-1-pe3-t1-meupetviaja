/*const URL = "http://localhost:3000/viajante";

function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    obterDadosViajante(email);
}

function obterDadosViajante(email) {
    fetch(URL, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao obter os dados do usuário");
            }
        })
        .then((data) => {
            const usuarioEncontrado = data.find((usuario) => usuario.email === email);

            if (usuarioEncontrado) {
                validarDadosUsuario(usuarioEncontrado);
            } else {
                alert("Usuário não cadastrado");
            }
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao obter os dados do usuário");
        });
}

function validarDadosUsuario(usuario) {
    const senha = document.getElementById("senha").value;
  
    if (usuario.senha === senha) {
      alert("Usuário logado. Redirecionando para pagina de destinos");
      localStorage.setItem("nomeUsuario", usuario.nome);
      window.location.href = "destinos.html";
    } else {
      alert("Senha incorreta");
    }
  }
  

function exibirNomeUsuario(nome) {
    console.log(nome)
    const nomeUsuarioElemento = document.getElementById("nome");
    nomeUsuarioElemento.innerText = nome;
}

function exibirSenha() {
    const senhaInput = document.getElementById("senha");
    const senhaCheckbox = document.getElementById("exibir-senha");
  
    senhaInput.type = senhaCheckbox.checked ? "text" : "password";
  }*/
  
// Página inicial de Login
URL = "https://db-json-kp7o.vercel.app/viajante";
function entrar(){
    var result;
    var nome;
    var status;
    const $email = document.querySelector("#email") 
    const $senha = document.querySelector("#senha") 

    let divlogin = document.querySelector("#login")

    fetch(URL, {
        headers:{
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        }
    })
    .then((Response) =>{
        Response.json().then((viajante) =>{
            result = Object.values(viajante).filter(viajante => viajante.email === $email.value);
        
            if(result.length === 0){
                alert("usuario não cadastrado");
            }else if (result[0].senha != $senha.value){
                alert("Senha Incorreta");
            }else {
                alert(" Usuario Logado com sucesso");
    
                const infoUsuario = {
                    nome : result[0].nome,
                    foto : result[0].foto,
                    status : 'true'
                }

                function exibirSenha() {
                    const senhaInput = document.getElementById("senha");
                    const senhaCheckbox = document.getElementById("exibir-senha");
                  
                    senhaInput.type = senhaCheckbox.checked ? "text" : "password";
                  }

                const dadosUsuario = JSON.stringify(infoUsuario);
                sessionStorage.setItem('Dados', dadosUsuario);
                window.location.href = 'destinos.html';
    
            }  
        })
    })
}






