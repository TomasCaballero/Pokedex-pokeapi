const contenedorPokemons = document.getElementById('contenedorPokemons');
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

const obtenerPokemon = ()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(res => res.json())
    .then(data => datosPokemon(data.results))

    const datosPokemon = (data)=>{
        data.forEach(element => {
            fetch(element.url)
                .then(res => res.json())
                .then(pokemon => mostrarPokemons(pokemon))
            
            const mostrarPokemons = (pokemon)=>{
                let pokemonId = pokemon.id
                // console.log(pokemonId)
                let nombrePokemon = pokemon.name.toUpperCase()
                // console.log(nombrePokemon)
                let imgPokemon = pokemon.sprites.front_default
                // console.log(imgPokemon)
                let hpPokemon = pokemon.stats[0].base_stat
                // console.log(hpPokemon)
                let atkPokemon = pokemon.stats[1].base_stat
                // console.log(atkPokemon)
                let defPokemon = pokemon.stats[2].base_stat
                // console.log(defPokemon)


                const div = document.createElement('div')
                div.classList.add('pokemon')
                div.setAttribute('id',`${pokemonId}`)
                div.innerHTML = `
                    <div class="red">
                        <div class="pokeId" style="color: white;">
                            ${pokemonId} 
                        </div>
                    </div>
                    <div class="img" style="background-image: url(${imgPokemon})">
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
            
        });
    }
}

obtenerPokemon()