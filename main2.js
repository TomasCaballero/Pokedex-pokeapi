const contenedorPokemons = document.getElementById('contenedorPokemons');

const obtenerPokemon = (id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => mostrarData(data))

    const mostrarData = (data)=>{
        pokemonId = data.id
        // console.log(pokemonId)
        nombrePokemon = data.name.toUpperCase()
        // console.log(nombrePokemon)
        imgPokemon = data.sprites.front_default
        // console.log(imgPokemon)
        hpPokemon = data.stats[0].base_stat
        // console.log(hpPokemon)
        atkPokemon = data.stats[1].base_stat
        // console.log(atkPokemon)
        defPokemon = data.stats[2].base_stat
        // console.log(defPokemon)

        const div = document.createElement('div')
        div.classList.add('pokemon')
        div.setAttribute('id',`${pokemonId}`)
        for(let i = 0; i < pokemonId; i++){
                div.innerHTML = `
                    <div class="red">
                        <div class="pokeId">
                            ${pokemonId} 
                        </div>
                    </div>
                    <div class="img">
                        <img src="${imgPokemon}" alt="">
                    </div>
                    <div class="white">
                        <div class="name">${nombrePokemon}</div>
                        <div class="descrip">
                            <div class="atk">
                                Atk: ${atkPokemon}
                            </div>
                            <div class="def">
                                Def: ${defPokemon}
                            </div>
                            <div class="hp">
                                Hp: ${hpPokemon}
                            </div>
                        </div>
                    </div>
                `
        contenedorPokemons.appendChild(div)
        }    
    }
}

const traerPokemons = (number)=>{
    for(let i = 1; i <= number; i++){
        obtenerPokemon(i)
    }
}

traerPokemons(151);

const filtroPorId = document.getElementById('filtroPorId')
filtroPorId.value = 20
console.log(filtroPorId.value)