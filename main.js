const pokemonContainer = document.getElementsByClassName('contenedorPokemons')
console.log(pokemonContainer)

const arrayPokemons = []

const traerPokemon = (id)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        crearPokemon(data)
    })
    .then(data => arrayPokemons.push(data))
}
console.log(arrayPokemons)

const traerPokemons = (number)=>{
    for(let i = 1; i <= number; i++){
        traerPokemon(i)
    }
}

traerPokemons(9);

const crearPokemon = (pokemon)=>{
    const div = document.createElement('div')
    div.classList.add('pokemon')
    
    const red = document.createElement('div')
    red.classList.add('red')

    const img = document.createElement('div')
    img.classList.add('img')
    const imgImg = document.createElement('img')
    imgImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    img.appendChild(imgImg)

    const white = document.createElement('div')
    white.classList.add('white')
        const name = document.createElement('div')
            name.classList.add('name')
            name.textContent = pokemon.name
        const descrip = document.createElement('div')
            descrip.classList.add('descrip')
                const atk = document.createElement('div')
                atk.classList.add('atk')
                atk.textContent = `Atk: ${pokemon.name}`
                const def = document.createElement('div')
                def.classList.add('def')
                def.textContent = `Def: ${pokemon.name}`
                const hp = document.createElement('div')
                hp.classList.add('hp')
                hp.textContent = `Hp: ${pokemon.name}`
        descrip.appendChild(atk, def, hp)
    white.appendChild(name, descrip)

    div.appendChild(red, img, white)
    pokemonContainer.appendChild(div)
}
crearPokemon(9)


// const crearPokemon = (pokemons)=>{

//     pokemons.forEach((pokemon)=>{
//         const div = document.createElement('div')
//         div.classList.add('pokemon')
//         div.innerHTML =`
//             <div class="red"></div>
//             <div class="img"><img src="${pokemon.sprites.front_default
//             }" alt=""></div>
//             <div class="white">
//                 <div class="name">${pokemon.name}</div>
//                 <div class="descrip">
//                     <div class="atk">
//                         Atk:
//                     </div>
//                     <div class="def">
//                         Def:
//                     </div>
//                     <div class="hp">
//                         Hp:
//                     </div>
//                 </div>
//             </div>
//         `
    
//         pokemonContainer.appendChild(div)
//     })
// }

// crearPokemon(arrayPokemons)