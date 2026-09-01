const lista = document.querySelector("#lista")

lista.addEventListener("click", (event) => { //coloca o evento no pai
    event.target.classList.toggle("selecionado");
});

//event.target = descobre qual elemento da lista pai foi clicado.

// toggle = serve para adicionar ou remover a classe do CSS.


/* quando for para trocar texto
const lista = document.querySelector("#lista")

lista.addEventListener("click", (event) => {
    event.target.textContent = "você clicou!";
});

*/