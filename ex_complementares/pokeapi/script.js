const pokemon = document.querySelector("#pokemon")

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
    console.log(erro);
});