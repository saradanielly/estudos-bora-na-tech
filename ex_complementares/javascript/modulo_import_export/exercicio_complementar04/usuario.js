const usuario = {
    nome: "sara",
    idade: 20,
    cidade: "mineiros",
    habilidades: [ "html", "css" ]
};

function mostrarNome() {
    return usuario.nome;
};

function adicionarHabilidade(habilidade) {
    usuario.habilidades = [
        ...usuario.habilidades,
        habilidade
    ];
};

function mostrarHabilidades() {
    return usuario.habilidades;
}

export {usuario, mostrarNome, adicionarHabilidade, mostrarHabilidades };