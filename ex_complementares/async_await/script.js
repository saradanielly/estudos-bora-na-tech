const buscar = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado")

function buscarUsuario () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = true;
            if (deuCerto) {
                resolve({
                    nome: "sara",
                    idade: 20,
                    profissao: "Desenvolvedora front-end"
                });
            } else {
                reject("não foi possível buscar o usuário.");
            }
        }, 2000);
    });
}

async function mostrarUsuario() {
    try {
        resultado.textContent = "Buscando usuário...";
        const usuario = await buscarUsuario();

        resultado.textContent = 
        `Nome: ${usuario.nome} | idade: ${usuario.idade} | profissão: ${usuario.profissao}`;
    } catch (erro) {
        resultado.textContent = erro;
    }
}

buscar.addEventListener("click", mostrarUsuario);

/*
quando clica no buscar.addEventListener, o JS chama o mostrarUsuario();
após, aparece o resultado.textContent = buscando usuário;
depois o await (buscarUsuario) fala, espere a função buscarUsuario terminar, ela demora dois segundos por conta do 2000 no setTimeout;
a partir daí aparece o resolve() e o seu resultado vai para const usuario;
agora o ucuario contém as informações de nome, idade e profissão;
depois, mostramos na tela com resultado.textContent;

e se der erro?
simplesmente a promise vai executar o reject;
o catch vai pegar o erro, e aparecera na tela não foi possível buscar o usuário.
*/