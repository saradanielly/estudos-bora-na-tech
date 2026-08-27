let produtos = [
    { nome: "mouse", preco: 50 },
    { nome: "teclado", preco: 100 },
    { nome: "monitor", preco: 500 }
];

//[MAP()]
let nomes = produtos.map(produto => produto.nome);

console.log(nomes);

//[FILTER()]
let produtosCaros = produtos.filter(
    produto => produto.preco > 100
);

console.log(produtosCaros);

//[REDUCE()]
let total = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco,
    0
);

console.log(total);