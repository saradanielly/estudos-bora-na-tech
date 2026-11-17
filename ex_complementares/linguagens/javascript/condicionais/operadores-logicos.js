const idade = 15;
const temIngresso = true;
const temCadastro = false;

console.log("Pode entrar:", idade >= 18 && temIngresso);

console.log("Tem alguma autorização:", temIngresso || temCadastro);

console.log("Não possui ingresso:", !temIngresso);

const nome = "";
console.log("Nome:", nome || "Visitante");

const quantidade = 0;
console.log("Quantidade:", quantidade ?? 10);