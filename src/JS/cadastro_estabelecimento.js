//Validação do formulário de cadastro de estabelecimento e envio de dados para o json-server
URL = "https://db-json-kp7o.vercel.app/estabelecimentos";

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

          const estabelecimentos = {
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo_estabelecimento").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            cidade: document.getElementById("cidade").value,
            id: "",
            estado: document.getElementById("estado").value,
            website: document.getElementById("website").value,
            instagram: document.getElementById("instagram").value,
            descricao: document.getElementById("descricao_estabelecimento").value,
            foto: document.getElementById("fotoestabelecimento").src,
            alt: document.getElementById("altfoto").value,
          };


          fetch (URL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(estabelecimentos),
          })
            .then((response) => {
              if (response.ok) {
                alert("Cadastro realizado");
                location.href = "destinos.html";
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
})();

//API Imgur para hospedar a foto
const clientID = "9facbf355e71bd0"
const fileUpload = document.getElementById("fotoestabelecimento");
const prev = document.getElementById("prev-foto-estabelecimento");

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


//Preencher select de cidades dinamicamente a partir do json de cidades
const cidadeSelect = document.getElementById("cidade");
const optionsCidade = document.createElement("option");

fetch("https://db-json-kp7o.vercel.app/cidades")
  .then(resp => resp.json())
  .then(data => {
    data.forEach(element => {
      optionsCidade.textContent = element.cidade;
      optionsCidade.value = element.id;
      cidadeSelect.appendChild(optionsCidade.cloneNode(true));
    });
  })
  .catch(err => console.log(err))

//Preencher select de tipo de estabelecimento dinamicamente a partir do json de tipo-estabelecimento
const tipoSelect = document.getElementById("tipo_estabelecimento");
const optionsTipo = document.createElement("option");

fetch("https://db-json-kp7o.vercel.app/tipo-estabelecimento")
  .then(resp => resp.json())
  .then(data => {
    data.forEach(element => {
      optionsTipo.textContent = element.tipo;
      optionsTipo.value = element.id;
      tipoSelect.appendChild(optionsTipo.cloneNode(true));
    });
  })
  .catch(err => console.log(err))



// Obter dados dos selects
tipoSelect.addEventListener("change", function () {
  const options = tipoSelect.options;
  const selectValues = [];
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    selectValues.push(option.textContent);
  }
});

cidadeSelect.addEventListener("change", function () {
  const options = cidadeSelect.options;
  const selectValues = [];
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    selectValues.push(option.textContent);
  }
});


//Botão cancelar
const cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", () => {
  window.location.href = "destinos.html";
});
