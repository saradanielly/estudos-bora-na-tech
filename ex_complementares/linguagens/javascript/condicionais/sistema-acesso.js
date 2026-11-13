let idade=20;
let possuiCadastro = true;

if (possuiCadastro === false) {
    console.log("Você precisa se cadastrar!");
} else if (possuiCadastro === true && idade < 18) {
    console.log("Acesso não permitido para menores de idade");
} else {
    console.log("Acesso permitido! Bem-vindo(a)!");
}

/*
&& serve para colocar duas 'perguntas' em uma única condição
*/