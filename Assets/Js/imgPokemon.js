function cargarImages() {

const pokemon1 = document.getElementById('imagen1'),
pokemon2 = document.getElementById('imagen2'),
pokemon3 = document.getElementById('imagen3'),
pokemon4 = document.getElementById('imagen4'),
pokemon5 = document.getElementById('imagen5'),
pokemon6 = document.getElementById('imagen6'),
name1 = document.getElementById('namePokemon1'),
name2 = document.getElementById('namePokemon2'),
name3 = document.getElementById('namePokemon3'),
name4 = document.getElementById('namePokemon4'),
name5 = document.getElementById('namePokemon5'),
name6 = document.getElementById('namePokemon6'),
abilily1 = document.getElementById('ability1'),
abilily2 = document.getElementById('ability2'),
abilily3 = document.getElementById('ability3'),
abilily4 = document.getElementById('ability4'),
abilily5 = document.getElementById('ability5'),
abilily6 = document.getElementById('ability6');




let pokemon = Math.ceil(Math.random()*140);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        pokemon1.src = data.sprites.front_default;
        name1.innerHTML = data.name;
        abilily1.innerHTML = data.id;
    })
    .catch(error => console.error())

    pokemon = Math.ceil(Math.random()*140);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        pokemon2.src = data.sprites.front_default;
        name2.innerHTML = data.name;
        abilily2.innerHTML = data.id;

    })
    .catch(error => console.error())

    pokemon = Math.ceil(Math.random()*140);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        pokemon3.src = data.sprites.front_default;
        name3.innerHTML = data.name;
        abilily3.innerHTML = data.id;

    })
    .catch(error => console.error())

    pokemon = Math.ceil(Math.random()*140);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        pokemon4.src = data.sprites.front_default;
        name4.innerHTML = data.name;
        abilily4.innerHTML = data.id;

    })
    .catch(error => console.error())


    pokemon = Math.ceil(Math.random()*140);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        pokemon5.src = data.sprites.front_default;
        name5.innerHTML = data.name;
        abilily5.innerHTML = data.id;

    })
    .catch(error => console.error())

    pokemon = Math.ceil(Math.random()*140);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        pokemon6.src = data.sprites.front_default;
        name6.innerHTML = data.name;
        abilily6.innerHTML = data.id;

    })
    .catch(error => console.error())
}
