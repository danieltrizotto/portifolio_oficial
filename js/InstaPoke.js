
function buscarPokemon(pokemonNameId) {
    const nomePoke = document.querySelector('.nomePoke');
    const numPoke = document.querySelector('.numero');
    const tipoPoke = document.querySelector('.tipos');
    const hpPoke = document.querySelector('.hp');
    const ataqPoke = document.querySelector('.ataque');
    const defPoke = document.querySelector('.defesa');
    const velPoke = document.querySelector('.velocidade');
    pokemonNameId = document.getElementById('pokemon-name').value.toLowerCase();//valor do input para busca
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameId}`;//usa o valor para a pesquisa

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];//carrega o gif
            const pokemonImage = document.getElementById('pokemon-image');
            pokemonImage.src = imageUrl;
            nomePoke.innerHTML = data.name;
            numPoke.innerHTML = data.id;

            pokemonImage.style.display = 'block';//faz o estilo ser definido block

            const tipos = data.types.map(typeInfo => typeInfo.type.name).join(', ');//pega as informçoes de tipo
            tipoPoke.innerHTML = `Tipo: ${tipos}`;

            const stats = {};//objeto para guardar os status
            data.stats.forEach(stat => {//preenche os status
                stats[stat.stat.name] = stat.base_stat;
            });
            hpPoke.innerHTML = `HP: ${stats.hp}`;
            ataqPoke.innerHTML = `Ataque: ${stats.attack}`;
            defPoke.innerHTML = `Defesa: ${stats.defense}`;
            velPoke.innerHTML = `Velocidade: ${stats.speed}`;

        })
        .catch(error => {///msg caso nao for encontrado
            console.error('Error fetching the Pokémon data:', error);
            window.alert('Pokémon not found. Please try again.');
        });
}