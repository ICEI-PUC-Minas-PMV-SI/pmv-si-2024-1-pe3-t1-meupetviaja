URL = "https://db-json-kp7o.vercel.app/viajante";

function verificarEmail() {
    const email = document.getElementById("email").value;

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
            alert("Verifique o email digitado");
        }
    })
    .catch((error) => {
        console.error(error);
        alert("Erro ao obter os dados do usuário");
    });
    
    function validarDadosUsuario(usuario) {
        const emailInserido = document.getElementById("email").value;
    
        if (usuario.email === emailInserido) {
            alert("Redirecionando para alterar senha");
            localStorage.setItem("nomeUsuario", usuario.nome);
            window.location.href = "alterar_senha.html?email=" + encodeURIComponent(email);
        } else {
            alert("E-mail incorreto");
        }
    } 


  }