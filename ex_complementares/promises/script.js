const buscar = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

//signifca que a função vai realizar uma operação que pode demorar e vai devolver uma promise.
function buscarUsuario() {
    return new Promise((resolve, reject) => {
        resultado.textContent = "Buscando usuário...";

// aqui determina oq vai aparecer caso o resultado for true ou false
        setTimeout(() => {
            const deuCerto = true;
            if (deuCerto) {
                resolve({ // significa que consiguiu
                    nome: "Sara",
                    idade: 20,
                    profissao: "Desenvolvedora Front-end"
                });
            } else {
                reject("Não foi possível buscar o usuário."); // não deu certo.
            }
        }, 2000); // quanto tempo vai esperar para executar o código.
    });
}

buscar.addEventListener("click", () => {
    buscarUsuario()
    .then((usuario) => { // quando o resultado é true.
        resultado.textContent = 
        `Nome: ${usuario.nome} | Idade: ${usuario.idade} | Profissão: ${usuario.profissao}`;

    })

    .catch((erro) => { // quando o resultado é false.
        resultado.textContent = erro;
    });
});