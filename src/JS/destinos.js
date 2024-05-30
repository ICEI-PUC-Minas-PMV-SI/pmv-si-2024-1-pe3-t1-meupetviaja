let cardsEstabelecimento;
let cardsCidade;
let cidadeSelecionada;
let selectCidade;
let selectTipoEstabelecimento;
let tipoEstabelecimentoSelecionado;

function getCidadePorID(idCidade) {
    return fetch(`https://db-json-kp7o.vercel.app/cidades/${idCidade}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao obter os dados da cidade: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(cidade => {
            return cidade;
        })
        .catch(error => {
            console.error('Erro ao obter os dados da cidade:', error);
            return null;
        });
};

async function verificarCidadeExistente(idCidade) {
    try {
        const response = await fetch(`https://db-json-kp7o.vercel.app/cidades/${idCidade}`);
        return response.ok;
    } catch (error) {
        console.error('Erro ao verificar a existência da cidade:', error);
        return false;
    }
};

async function filtrarCards(cidadeId) {
    cidadeSelecionada = cidadeId; // Atribuir o valor selecionado do filtro de cidade à variável global

    cardsEstabelecimento = Array.from(document.querySelectorAll(".card-wrapper"));

    cardsEstabelecimento.forEach(card => {
        const cidadeCardId = card.querySelector('.card-info').dataset.cidadeId;
        getCidadePorID(cidadeCardId)
            .then(cidadeCard => {
                verificarFiltro(cidadeCard, cidadeSelecionada);
            })
            .catch(error => {
                console.error('Erro ao obter os dados da cidade:', error);
                card.style.display = "none";
            });
    });

    function verificarFiltro(cidadeCard, cidadeId) {
        const estabelecimentos = document.querySelectorAll('.glider-slide');
        estabelecimentos.forEach(estabelecimento => {
            const cidadeCardId = estabelecimento.querySelector('.card-info').dataset.cidadeId;
            if (cidadeId === null || cidadeId === "0" || cidadeCardId === cidadeId) {
                estabelecimento.style.display = "block";
                estabelecimento.classList.remove('card-wrapper')
                estabelecimento.classList.add('filtered-card')
            } else {
                estabelecimento.remove();
            }
        });
    }

    cardsCidade = Array.from(document.querySelectorAll(".card.container-dest"));

    cardsCidade.forEach(card => {
        const cidadeId = card.getAttribute('data-id');
        console.log('Cidade ID:', cidadeId);
        card.style.display = (cidadeId === cidadeSelecionada || cidadeSelecionada === "0") ? "block" : "none";
        card.addEventListener('click', function () {
            window.location.href = `cidade.html?id=${cidadeId}`;
        });
    });

    // Exibir todos os cards de estabelecimento
    cardsEstabelecimento.forEach(card => {
        card.style.display = "block";
    });
};

async function search_destino() {
    selectCidade = document.getElementById("ibusca");
    cidadeSelecionada = selectCidade.value;

    filtrarCards(cidadeSelecionada);
};

function getCardsEstabelecimento() {
    cardsEstabelecimento = document.querySelectorAll(".card-wrapper");
};

function inicializarFiltro() {
    getCardsEstabelecimento();
    selectCidade = document.getElementById("ibusca");
    cidadeSelecionada = selectCidade.value; // Atribuir o valor selecionado do filtro de cidade à variável global
    console.log('Cidade selecionada:', cidadeSelecionada);
    filtrarCards(cidadeSelecionada);

    // Exibir todos os cards de cidade
    cardsCidade.forEach(card => {
        card.style.display = "block";
    });

    // Exibir todos os cards de estabelecimento
    cardsEstabelecimento.forEach(card => {
        card.style.display = "block";
    });
};
inicializarFiltro();

async function search_destino_tipo_estabelecimento() {
    selectTipoEstabelecimento = document.getElementById("ibusca_tipo_estabelecimento");
    let tipoEstabelecimentoSelecionado = selectTipoEstabelecimento.value;

    console.log('Tipo de estabelecimento selecionado:', tipoEstabelecimentoSelecionado);

    cidadeSelecionada = document.getElementById("idbusca").value;

    filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada);
};

function filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada) {
    const selectTipoEstabelecimento = document.getElementById("ibusca_tipo_estabelecimento");
    const tipoEstabelecimentoSelecionadoId = parseInt(selectTipoEstabelecimento.options[selectTipoEstabelecimento.selectedIndex].dataset.id);

    const cardsEstabelecimento = Array.from(document.querySelectorAll(".card-wrapper"));
    const swiperContainer = document.getElementById("glider-container-est");
    const swiperWrapper = swiperContainer.querySelector(".card-wrapper.glider-slide");

    console.log("Tipo de Estabelecimento Selecionado:", tipoEstabelecimentoSelecionado);
    console.log("Cidade Selecionada:", cidadeSelecionada);

    cardsEstabelecimento.forEach(card => {
        const tipoEstabelecimentoCardId = parseInt(card.querySelector('.card-info span').dataset.id);
        const cidadeCardId = parseInt(card.querySelector('.card-info').dataset.cidadeId);

        console.log("Tipo de Estabelecimento do Card:", tipoEstabelecimentoCardId);
        console.log("Cidade do Card:", cidadeCardId);

        const isTipoEstabelecimentoSelecionado = parseInt(tipoEstabelecimentoSelecionado) === 0 || tipoEstabelecimentoCardId === parseInt(tipoEstabelecimentoSelecionadoId);
        const isCidadeSelecionada = cidadeSelecionada === "" || cidadeCardId === parseInt(cidadeSelecionada) || cidadeSelecionada === "0";

        console.log("Is Tipo Estabelecimento Selecionado:", isTipoEstabelecimentoSelecionado);
        console.log("Is Cidade Selecionada:", isCidadeSelecionada);

        if (isTipoEstabelecimentoSelecionado && isCidadeSelecionada) {
            card.style.display = "block";
            card.classList.remove("card-wrapper");
            card.classList.add("filtered-card");
        } else {
            card.style.display = "none";
        }
    });


    // Reinicializa o Glider
    gliderEst.refresh();

    cardsCidade = Array.from(document.querySelectorAll(".card.container-dest"));

    cardsCidade.forEach(card => {
        const cidadeId = parseInt(card.getAttribute('data-id'));
        const cardEstabelecimentos = Array.from(document.querySelectorAll(".card-wrapper"));
        const hasVisibleEstabelecimentos = cardEstabelecimentos.some(estabelecimento => estabelecimento.style.display !== "none");

        if (cidadeId === parseInt(cidadeSelecionada) || cidadeSelecionada === "0" || hasVisibleEstabelecimentos) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Remove os cards que estão ocultos do swiper
    const swiperSlides = Array.from(swiperWrapper.getElementsByClassName("glider-track"));
    swiperSlides.forEach(slide => {
        const card = slide.querySelector(".container-est");
        if (card && card.style.display === "none") {
            slide.remove();
        }
    });

    // Reorganiza os cards visíveis para o início do swiper
    const visibleSlides = Array.from(swiperWrapper.getElementsByClassName("glider-track"));
    visibleSlides.forEach(slide => {
        swiperWrapper.prepend(slide);
    });
}



function executarFiltros(cidadeSelecionada, tipoEstabelecimentoSelecionado) {
    console.log('Cidade selecionada:', cidadeSelecionada);
    console.log('Tipo de estabelecimento selecionado:', tipoEstabelecimentoSelecionado);
    filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada);
};

const btnFiltrar = document.getElementById("btnFiltrar");
selectCidade = document.getElementById("ibusca");
selectTipoEstabelecimento = document.getElementById("ibusca_tipo_estabelecimento");

btnFiltrar.addEventListener('click', function () {
    cidadeSelecionada = selectCidade.value;
    tipoEstabelecimentoSelecionado = selectTipoEstabelecimento.value;

    console.log('Botão Filtrar clicado');
    console.log('Cidade selecionada:', cidadeSelecionada);
    console.log('Tipo de estabelecimento selecionado:', tipoEstabelecimentoSelecionado);

    if (cidadeSelecionada && tipoEstabelecimentoSelecionado) {
        executarFiltros(cidadeSelecionada, tipoEstabelecimentoSelecionado);
    } else if (cidadeSelecionada) {
        console.log('Apenas o filtro de cidade selecionado');
        filtrarCards(cidadeSelecionada);
    } else if (tipoEstabelecimentoSelecionado) {
        console.log('Apenas o filtro de tipo de estabelecimento selecionado');
        filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada);
    }
});

function montaGlider(cidade, nome, foto, alt, descricao, id, tipo) {
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
};


document.addEventListener('DOMContentLoaded', function () {
    fetch("https://db-json-kp7o.vercel.app/cidades")
        .then(response => response.json())
        .then(data => {
            let wrapperDestinos = document.getElementById('slide-container');
            let cidadeFilter = '<option value="">Selecione a cidade desejada:</option>';

            var cidadeCarrosel = '<div class="slide-content" id="destinos"><div class="swiper-wrapper" id="wrapper-destinos">';

            data.forEach(element => {
                cidadeCarrosel += '<div class="swiper-slide" id="slide-dest"><div class="card container-dest" cidade="' + element.cidade + '" data-id="' + element.id + '" ><img src="' + element.imagem + '" alt="' + element.alt + '" class="card-image"><div class="overlay"><div class="text"><a href="cidade.html?id=' + element.id + '">' + element.cidade + '</a><p><a href="cidade.html?id=' + element.id + '">' + element.detalhes.substr(0, 50) + "..." + '</a></p></div></div></div></div>';
                cidadeFilter += '<option value="' + element.id + '">' + element.cidade + '</option>';
            });

            cidadeCarrosel += '</div></div><div class="swiper-button-next" id="next-dest"></div><div class="swiper-button-prev" id="prev-dest"></div><div class="swiper-pagination" id="pag-dest"></div>';
            wrapperDestinos.innerHTML = cidadeCarrosel;

            // Atualiza o select de cidades
            let wrapperFilter = document.getElementById('ibusca');
            wrapperFilter.innerHTML = cidadeFilter;

            // Configuração do Swiper para os destinos
            swiperDest = new Swiper('.slide-content#destinos', {
                slidesPerView: 3,
                spaceBetween: 15,
                loop: true,
                centerSlide: 'true',
                fade: 'true',
                grabCursor: 'true',
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    520: {
                        slidesPerView: 2,
                    },
                    950: {
                        slidesPerView: 3,
                    },
                },
            });

            // Adiciona evento de clique aos cards de cidade
            const cardsCidade = document.querySelectorAll("#wrapper-destinos .container-dest.card");
            Array.from(cardsCidade).forEach(card => {
                const cidadeId = card.getAttribute('data-id');
                card.addEventListener('click', function () {
                    window.location.href = `cidade.html?id=${cidadeId}`;
                });
            });

            fetch("https://db-json-kp7o.vercel.app/tipo-estabelecimento")
                .then(response => response.json())
                .then(data => {
                    let wrapperFilterTipoEstabelecimento = document.getElementById('ibusca_tipo_estabelecimento');
                    let tipoEstabelecimentoFilter = '<option value="">Selecione o tipo deestabelecimento desejado:</option>';

                    data.forEach(element => {
                        tipoEstabelecimentoFilter += '<option value="' + element.id + '" data-id="' + element.id + '">' + element.tipo + '</option>';
                    });

                    wrapperFilterTipoEstabelecimento.innerHTML = tipoEstabelecimentoFilter;
                });

            // Popula os cards de estabelecimentos
            let wrapperEstabelecimentos = document.getElementById('glider-container-est');
            fetch("https://db-json-kp7o.vercel.app/estabelecimentos")
                .then(response => response.json())
                .then(data => {
                    var estabelecimentosCarrossel = '<div class="glider" id="glider-estabelecimentos">';
                    data.forEach(element => {
                        const card = montaGlider(element.cidade, element.nome, element.foto, element.alt, element.descricao, element.id, element.tipo);
                        estabelecimentosCarrossel += card;
                    });
                    estabelecimentosCarrossel += '</div></div><button class="glider-prev" id="prev-est"><i class="fa-solid fa-chevron-left fa-lg"></i></button><button class="glider-next" aria-disabled="true" id="next-est"><i class="fa-solid fa-chevron-right fa-lg"></i></button><div role="tablist" class="dots"></div>';
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

                    // Adiciona evento de clique aos cards
                    const cards = document.getElementsByClassName('glider-track');
                    Array.from(cards).forEach(card => {
                        const cardWrappers = card.getElementsByClassName('card-wrapper');
                        Array.from(cardWrappers).forEach(cardWrapper => {
                            cardWrapper.addEventListener('click', function () {
                                const estabelecimentoId = cardWrapper.getAttribute('data-id');
                                window.location.href = `estabelecimento.html?id=${estabelecimentoId}`;
                            });
                        });
                    });


                });
        });
});