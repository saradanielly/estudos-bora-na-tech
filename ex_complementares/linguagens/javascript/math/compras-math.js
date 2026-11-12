/*let produto1 = 1550;
let produto2 = 2030;

let total = produto1 + produto2;

console.log("Total em centavos:", total);

let valorEmReais = total / 100;

console.log("Total da compra:", valorEmReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})); */

let produto1 = 1685;
let produto2 = 5284;
let produto3= 7850;

let total = produto1 + produto2 + produto3;

console.log("Total em centavos:", total);

let valorEmReais = total / 100;

console.log("Total da compra:", valorEmReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}));

console.log(Math.max(produto1, produto2, produto3));