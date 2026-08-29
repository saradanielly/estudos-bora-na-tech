import {mostrarProdutos, filtrarPorCategoria, somarPrecos, adicionarProduto } from "./produtos.js"

console.log ("os produtos são:", mostrarProdutos());
console.log ("os produtos de limpeza são:", filtrarPorCategoria("limpeza"));
console.log ("a soma total dos produtos são:", somarPrecos());

adicionarProduto({
    nome: "bolacha",
    categoria: "alimentação",
    preco: 5
});

console.log ("os produtos agora são:", mostrarProdutos());
console.log ("com o novo produto a soma agora é:", somarPrecos());