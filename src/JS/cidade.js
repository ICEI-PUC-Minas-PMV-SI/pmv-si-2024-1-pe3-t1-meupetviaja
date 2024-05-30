// Função para fazer uma requisição HTTP e retornar os dados como JSON
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let cidadeId;
document.addEventListener("DOMContentLoaded", function () {
    let containerCidade = document.getElementById('container-cidade');
    cidadeId = window.location.href.split('=')[1];
    if (cidadeId == null) {
        containerCidade.innerHTML = "<h1> 404 Cidade não encontrada</h1>"
    } else {
        fetch("https://db-json-kp7o.vercel.app/cidades")
            .then(response => response.json())
            .then(data => {
                var test = '';
                data.forEach(element => {
                    if (element.id == cidadeId) {
                        test = '<img src="' + element.imagem + '" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.cidade + '</h2><p>' + element.detalhes + '</p>';
                        containerCidade.innerHTML = test;
                    }
                });

                // Chamada para buscar os estabelecimentos e renderizar o carrossel
                fetch("https://db-json-kp7o.vercel.app/estabelecimentos")
                    .then(response => response.json())
                    .then(data => {
                        let wrapperEstabelecimentos = document.getElementById('slide-container-est');
                        var estabelecimentosCarrossel = '<div class="glider" id="glider-estabelecimentos">';
                        data.forEach(element => {
                            const card = montaGlider(element.cidade, element.nome, element.foto, element.alt, element.descricao, element.id, element.tipo, cidadeId);
                            estabelecimentosCarrossel += card;
                        });
                        estabelecimentosCarrossel += '</div></div><button class="glider-prev" id="prev-est"><i class="fa-solid fa-chevron-left fa-lg"></i></button><button class="glider-next" aria-disabled="true" id="next-est"><i class="fa-solid fa-chevron-right fa-l"></i></button><div role="tablist" class="dots"></div>';
                        wrapperEstabelecimentos.innerHTML = estabelecimentosCarrossel;

                        // Inicializa o Glider
                        gliderEst = new Glider(document.querySelector('.glider'), {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            spaceBetween: 15,
                            draggable: true,
                            dots: '.dots',
                            arrows: {
                                prev: '.glider-prev',
                                next: '.glider-next'
                            },
                            responsive: [
                                {
                                    breakpoint: 520,
                                    settings: {
                                        slidesToShow: 2
                                    }
                                },
                                {
                                    breakpoint: 950,
                                    settings: {
                                        slidesToShow: 3
                                    }
                                }
                            ]
                        });
                    });
            });
    }
});

function montaGlider(cidade, nome, foto, alt, descricao, id, tipo, cidadeId) {
    if (cidade === cidadeId) {
        return `
        <div class="card-wrapper" id="wrapper-estabelecimentos" data-id="${id}">
            <div class="container-est card">
                <img src="${foto}" alt="${alt}" class="glider-image">
                    <div class="overlay">
                        <div class="text">
                            <h4>${nome}</h4>
                            <p>${descricao.substring(0, 50)}...</p>
                                <div class="card-info" data-cidade-id="${cidade}">
                                <h3 class="hidden">${cidade}</h3>
                                <span class="hidden" data-id="${tipo}">${tipo}</span>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    `;
    } else {
        return ''; // Retorna uma string vazia caso a cidade não corresponda à cidade selecionada
    }
};

