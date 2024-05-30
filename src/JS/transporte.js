$(document).ready(function () {
    (function() {
        var name = 'dog';

        // Chama a API dos animais e monta os cards no carrossel
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/animals?name=dog',
            headers: { 'X-Api-Key': 'IBfeqf89T/+nyigLfw1MPg==Dg18sHvXsSatwB3F' },
            contentType: 'application/json',
            success: function (result) {
                console.log(result);
                if (result && result.length > 0) {
                    const carouselInner = document.getElementById('carousel-inner');
                    result.forEach(animal => {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `<h2>${animal.name}</h2><div class="details">${generateAnimalDetailsHtml(animal)}</div>`;
                        card.addEventListener('click', () => {
                            card.classList.toggle('expanded');
                        });
                        carouselInner.appendChild(card);
                    });
                } else {
                    $('#result').html('<p>No data found for the specified animal.</p>');
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $('#result').html('<p>Error retrieving data.</p>');
            }
        });

        // Função para gerar HTML dos detalhes do animal
        function generateAnimalDetailsHtml(animal) {
            return `
                <span class="close-icon" onclick="closeCard(this)">X</span>
                <p><strong>Scientific Name:</strong> ${animal.taxonomy.scientific_name}</p>
                <p><strong>Location:</strong> ${animal.locations.join(', ')}</p>
                <p><strong>Diet:</strong> ${animal.characteristics.diet}</p>
                <p><strong>Top Speed:</strong> ${animal.characteristics.top_speed}</p>
                <p><strong>Lifespan:</strong> ${animal.characteristics.lifespan}</p>
                <p><strong>Prey:</strong> ${animal.characteristics.prey}</p>
                <p><strong>Habitat:</strong> ${animal.characteristics.habitat}</p>
                <p><strong>Biggest Threat:</strong> ${animal.characteristics.biggest_threat}</p>
                <p><strong>Gestation Period:</strong> ${animal.characteristics.gestation_period}</p>
                <p><strong>Average Litter Size:</strong> ${animal.characteristics.average_litter_size}</p>
                <p><strong>Common Name:</strong> ${animal.characteristics.common_name}</p>
                <p><strong>Skin Type:</strong> ${animal.characteristics.skin_type}</p>
                <p><strong>Height:</strong> ${animal.characteristics.height}</p>
                <p><strong>Weight:</strong> ${animal.characteristics.weight}</p>
            `;
        }

        // Seletores e variáveis específicas para o carrossel de cães
        const prevButtonDog = document.querySelector('.carousel-button-dog.prev');
        const nextButtonDog = document.querySelector('.carousel-button-dog.next');
        const carouselInnerDog = document.getElementById('carousel-inner');
        let offsetDog = 0;

        // Listeners de eventos específicos para o carrossel de cães
        prevButtonDog.addEventListener('click', () => {
            if (offsetDog > 0) {
                offsetDog--;
                carouselInnerDog.style.transform = `translateX(-${offsetDog * 100}%)`;
            }
        });

        nextButtonDog.addEventListener('click', () => {
            if (offsetDog < carouselInnerDog.children.length - 1) {
                offsetDog++;
                carouselInnerDog.style.transform = `translateX(-${offsetDog * 100}%)`;
            }
        });
    })();

    (function() {
        var name = 'dog';

        // Chama a API dos animais e monta os cards no carrossel
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/animals?name=cat',
            headers: { 'X-Api-Key': 'IBfeqf89T/+nyigLfw1MPg==Dg18sHvXsSatwB3F' },
            contentType: 'application/json',
            success: function (result) {
                console.log(result);
                if (result && result.length > 0) {
                    const carouselInner = document.getElementById('carousel-inner-cat');
                    result.forEach(animal => {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `<h2>${animal.name}</h2><div class="details">${generateAnimalDetailsHtml(animal)}</div>`;
                        card.addEventListener('click', () => {
                            card.classList.toggle('expanded');
                        });
                        carouselInner.appendChild(card);
                    });
                } else {
                    $('#result').html('<p>No data found for the specified animal.</p>');
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $('#result').html('<p>Error retrieving data.</p>');
            }
        });

        // Função para gerar HTML dos detalhes do animal
        function generateAnimalDetailsHtml(animal) {
            return `
                <span class="close-icon" onclick="closeCard(this)">X</span>
                <p><strong>Scientific Name:</strong> ${animal.taxonomy.scientific_name}</p>
                <p><strong>Location:</strong> ${animal.locations.join(', ')}</p>
                <p><strong>Diet:</strong> ${animal.characteristics.diet}</p>
                <p><strong>Top Speed:</strong> ${animal.characteristics.top_speed}</p>
                <p><strong>Lifespan:</strong> ${animal.characteristics.lifespan}</p>
                <p><strong>Prey:</strong> ${animal.characteristics.prey}</p>
                <p><strong>Habitat:</strong> ${animal.characteristics.habitat}</p>
                <p><strong>Biggest Threat:</strong> ${animal.characteristics.biggest_threat}</p>
                <p><strong>Gestation Period:</strong> ${animal.characteristics.gestation_period}</p>
                <p><strong>Average Litter Size:</strong> ${animal.characteristics.average_litter_size}</p>
                <p><strong>Common Name:</strong> ${animal.characteristics.common_name}</p>
                <p><strong>Skin Type:</strong> ${animal.characteristics.skin_type}</p>
                <p><strong>Height:</strong> ${animal.characteristics.height}</p>
                <p><strong>Weight:</strong> ${animal.characteristics.weight}</p>
            `;
        }

        // Seletores e variáveis específicas para o carrossel de gatos
        const prevButtonCat = document.querySelector('.carousel-button-cat.prev');
        const nextButtonCat = document.querySelector('.carousel-button-cat.next');
        const carouselInnerCat = document.getElementById('carousel-inner-cat');
        let offsetCat = 0;

        // Listeners de eventos específicos para o carrossel de gatos
        prevButtonCat.addEventListener('click', () => {
            if (offsetCat > 0) {
                offsetCat--;
                carouselInnerCat.style.transform = `translateX(-${offsetCat * 100}%)`;
            }
        });

        nextButtonCat.addEventListener('click', () => {
            if (offsetCat < carouselInnerCat.children.length - 1) {
                offsetCat++;
                carouselInnerCat.style.transform = `translateX(-${offsetCat * 100}%)`;
            }
        });
    })();

    (function() {
        
        // Chama a API dos animais e monta os cards no carrossel
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/animals?name=bird',
            headers: { 'X-Api-Key': 'IBfeqf89T/+nyigLfw1MPg==Dg18sHvXsSatwB3F' },
            contentType: 'application/json',
            success: function (result) {
                console.log(result);
                if (result && result.length > 0) {
                    const carouselInner = document.getElementById('carousel-inner-bird');
                    result.forEach(animal => {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `<h2>${animal.name}</h2><div class="details">${generateAnimalDetailsHtml(animal)}</div>`;
                        card.addEventListener('click', () => {
                            card.classList.toggle('expanded');
                        });
                        carouselInner.appendChild(card);
                    });
                } else {
                    $('#result').html('<p>No data found for the specified animal.</p>');
                }
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                $('#result').html('<p>Error retrieving data.</p>');
            }
        });

        // Função para gerar HTML dos detalhes do animal
        function generateAnimalDetailsHtml(animal) {
            return `
                <span class="close-icon" onclick="closeCard(this)">X</span>
                <p><strong>Scientific Name:</strong> ${animal.taxonomy.scientific_name}</p>
                <p><strong>Location:</strong> ${animal.locations.join(', ')}</p>
                <p><strong>Diet:</strong> ${animal.characteristics.diet}</p>
                <p><strong>Top Speed:</strong> ${animal.characteristics.top_speed}</p>
                <p><strong>Lifespan:</strong> ${animal.characteristics.lifespan}</p>
                <p><strong>Prey:</strong> ${animal.characteristics.prey}</p>
                <p><strong>Habitat:</strong> ${animal.characteristics.habitat}</p>
                <p><strong>Biggest Threat:</strong> ${animal.characteristics.biggest_threat}</p>
                <p><strong>Gestation Period:</strong> ${animal.characteristics.gestation_period}</p>
                <p><strong>Average Litter Size:</strong> ${animal.characteristics.average_litter_size}</p>
                <p><strong>Common Name:</strong> ${animal.characteristics.common_name}</p>
                <p><strong>Skin Type:</strong> ${animal.characteristics.skin_type}</p>
                <p><strong>Height:</strong> ${animal.characteristics.height}</p>
                <p><strong>Weight:</strong> ${animal.characteristics.weight}</p>
            `;
        }

         // Seletores e variáveis específicas para o carrossel de pássaros
         const prevButtonBird = document.querySelector('.carousel-button-bird.prev');
         const nextButtonBird = document.querySelector('.carousel-button-bird.next');
         const carouselInnerBird = document.getElementById('carousel-inner-bird');
         let offsetBird = 0;
 
         // Listeners de eventos específicos para o carrossel de pássaros
         prevButtonBird.addEventListener('click', () => {
             if (offsetBird > 0) {
                 offsetBird--;
                 carouselInnerBird.style.transform = `translateX(-${offsetBird * 100}%)`;
             }
         });
 
         nextButtonBird.addEventListener('click', () => {
             if (offsetBird < carouselInnerBird.children.length - 1) {
                 offsetBird++;
                 carouselInnerBird.style.transform = `translateX(-${offsetBird * 100}%)`;
             }
         });
    })();
});
