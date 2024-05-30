/*Validação do formulário de cadastro do viajante
Vincula URL do jsonserver */
URL = "https://db-json-kp7o.vercel.app/viajante";
// Validação do bootrasp no formulário
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
        } else {
          event.preventDefault();
          event.stopPropagation()
          form.classList.add('was-validated')
          // Dados necessários para o json
          const viajante = {
            nome: document.getElementById("nome").value,
            usuario: document.getElementById("usuario").value,
            email: document.getElementById("email").value,
            id: "",
            senha: document.getElementById("senha").value,
            foto: document.getElementById("fotoperfil").src
          };

          // Envia os dados do formulário para arquivo json
          fetch (URL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(viajante),
          })
            .then((response) => {
              if (response.ok) {
                alert("Cadastro realizado");
                location.href = "entre.html";
              } else {
                alert("Erro ao cadastrar");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }

      }, false)
    })
})()

//API Imgur para hospedar a foto
const clientID = "9facbf355e71bd0"
const fileUpload = document.getElementById("fotoperfil");
const prev = document.getElementById("prev-foto-perfil");

fileUpload.addEventListener("change", (event) => {
  const formData = new FormData();
  formData.append("image", event.target.files[0]);
  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      "Authorization": `Client-ID ${clientID}`,
    },
    body: formData,
  }).then(data => data.json()).then(data => {
    if (data.success) {
      fileUpload.src = data.data.link;
      prev.innerHTML = '<img src="' + data.data.link + '" style="width: 200px; border-radius: 10px">'
      console.log(data.data.link)
    } else {
      alert("Erro ao carregar imagem")
    }
  })
});

function mostrarSenha(){
    var senha = document.getElementById('senha');
    if(senha.type=='password'){
        senha.type='text';
    }else{
        senha.type='password';
}
};

function cancelarFormulario (){
    window.location.href = "entre.html";
};
