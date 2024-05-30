/*URL = "http://localhost:3000/viajante";

// Função para alterar a senha
function alterarSenha() {
   
  };

  // Obter os valores do campo de senha nova e campo de confirmação de senha
  const novaSenha = document.getElementById("nova-senha").value;
  const confirmeSenha = document.getElementById("confirme-a-senha").value;

  // Obter o valor do parâmetro "email" da URL
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');

  // Construir o objeto de dados para enviar na solicitação
  const data = {
    email: email,
    novaSenha: novaSenha
  };

  // Envia os dados do formulário para arquivo json
  fetch (URL, {
    method: "PUT",
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

  /* Enviar uma solicitação PATCH para atualizar a senha no servidor
  fetch(URL, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(updatedData => {
      console.log("Senha atualizada com sucesso:", updatedData);
      alert("Senha atualizada com sucesso!");
    })
    .catch(error => {
      console.error("Erro ao atualizar a senha:", error);
      alert("Ocorreu um erro ao atualizar a senha. Por favor, tente novamente.");
    });
}*/

const URL = "http://localhost:3000/viajante";

function obterParametroEmail() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('email');
}

function alterarSenha() {
  const email = obterParametroEmail();
  const novaSenha = document.getElementById("novaSenha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (email && novaSenha && confirmarSenha) {
    if (novaSenha === confirmarSenha) {
      const dadosAtualizados = { senha: novaSenha };

      fetch(`${URL}?email=${encodeURIComponent(email)}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAtualizados),
      })
        .then((response) => {
          if (response.ok) {
            alert("Senha alterada com sucesso!");
            window.location.href = "index.html";
          } else {
            throw new Error("Erro ao alterar senha");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Erro ao alterar senha");
        });
    } else {
      alert("As senhas não correspondem. Por favor, digite novamente.");
    }
  } else {
    alert("Email, nova senha e confirmação de senha são obrigatórios");
  }
}
