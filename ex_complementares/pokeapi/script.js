const pokemon = document.querySelector("#pokemon")

pokemon.innerHTML = "Carregando...";

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error("Erro na conexão via internet");
    }
    return resposta.json();
})

.then((dados) => {
    pokemon.innerHTML = `
    <h2>${dados.name}</h2>
    <img src="${dados.sprites.front_default}" alt="${dados.name}">
    `;
})
.catch((erro) => {
    pokemon.innerHTML = "Não foi possível carregar o Pokémon."
    console.log(erro);
}); 

/*pokemon.innerHTML = "Carregando...";

setTimeout(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((resposta) => {
            return resposta.json();
        })
        .then((dados) => {
            pokemon.innerHTML = `
                <h2>${dados.name}</h2>
                <img src="${dados.sprites.front_default}" alt="${dados.name}">
            `;
        });
}, 2000);*/