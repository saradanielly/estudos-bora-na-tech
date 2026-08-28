// OBJETO ORIGINAL
const usuario = {
    nome: "sara",
    idade: 20,
    habilidades: ["HTML", "CSS"]
};

//SPREAD
const usuarioCompleto = {
    ...usuario,
    cidade: "mineiros",
    profissao: "desenvolvedora"
};

//DESESTRUTURAÇÃO
const {
    nome: nomeUsuario,
    idade, 
    cidade,
    profissao,
    experiencia = "não informada"
} = usuarioCompleto;

//USANDO AS VARIAVEIS
console.log(nomeUsuario);
console.log(idade);
console.log(cidade);
console.log(profissao);
console.log(experiencia);

// SPREAD COM ARRAY
const novasHabilidades = [
    ...usuario.habilidades,
    "javascript"
];

console.log(novasHabilidades);

// JSON 
const usuarioJSON = JSON.stringify(usuarioCompleto);

console.log(usuarioJSON);

// JSON -> OBJETO
const usuarioConvertido = JSON.parse(usuarioJSON);

console.log(usuarioConvertido.nome);