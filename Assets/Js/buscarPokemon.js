let buscara = document.getElementById('buscarPokemon');

buscara.addEventListener('click',  () => {

    const modulo = document.getElementById('moduloBuscar');
    modulo.innerHTML = "";
    let pokemon = document.getElementById('namePokemon').value;
    if (/^[A-Z]+$/i.test(pokemon)) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        const caja = document.createElement('div');
        caja.classList.add('caja')
        const nombre = document.createElement('h1');
        nombre.innerHTML = data.name;
        caja.appendChild(nombre); 
        const image = document.createElement('img');
        image.src = data.sprites.front_default;
        caja.appendChild(image);

        modulo.appendChild(caja)


    })
    .error(error => error)
    } else {
        alert('Ingresa el nombre del pokemon, solo se aceptan letras')
    }
    
})