//pega os dados do botão e tema
const botaoTema = document.querySelector("#botaoTema");
const body = document.body;

//verifica o tema salvo ao abrir a página e faz continuar com o que foi salvo anteriormente
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    body.classList.add("tema-escuro");
}

//altera o tema ao clicar no botão
botaoTema.addEventListener("click", () => {
    body.classList.toggle("tema-escuro");


//salva a escolha
if (body.classList.contains("tema-escuro")) {
    localStorage.setItem("tema", "escuro");
} else {
    localStorage.setItem("tema", "claro");
}

});

console.log("javascipt conectado")