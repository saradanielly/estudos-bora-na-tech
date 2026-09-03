// pega todos os valores 
const nome = document.querySelector ("#nome");
const salvar = document.querySelector ("#botaoSalvar");
const mensagem = document.querySelector ("#mensagem")

// salva o nome que a pessoa digitou nome.value no localStorage
salvar.addEventListener("click", () => {
    const nomeDigitado = nome.value;

    localStorage.setItem("nome", nomeDigitado);

    mensagem.textContent = `olá, ${nomeDigitado}!`
});

// mostra o nome que salvou por último
const nomeSalvo = localStorage.getItem("nome");

if (nomeSalvo) {
    mensagem.textContent = `olá, ${nomeSalvo}`
}