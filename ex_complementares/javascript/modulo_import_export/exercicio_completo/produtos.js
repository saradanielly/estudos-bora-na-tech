// criando os objetos
let produtos = [
    {
        nome: "Creme de pentear",
        categoria: "cuidados pessoais",
        preco: 35
    },

    {
        nome: "Desinfetante",
        categoria: "limpeza",
        preco: 10
    },

    {
        nome: "Arroz branco",
        categoria: "alimento",
        preco: 50
    }
];
// feita a função mostrar produtos, só retornar a lista que aparece tudo
function mostrarProdutos() {
    return produtos;
};

function filtrarPorCategoria(categoria) { // importante colocar o nome categoria para no index escolher exatamente a categoria que eu quero.
    return produtos.filter((produto) => { // iremos retornar aos objetos produtos para filtrar e extrair a informação necessária
        return produto.categoria === categoria // aqui para deixar claro que a informação extraida sera a categoria e ela precisa ser igual a categoria do produto acima para aparecer a resposta
    });
};

function somarPrecos() {
    let total = produtos.reduce( // aqui vai pegar todo o objeto produtos e utilizar o metodo reduce para somar os preços.
        (acumulador, produto) => acumulador + produto.preco, // vai somar todos os preços dos produtos
        0 // como começa a contar os itens em 0 aqui faz não deixar nenhum produto de fora.
    );

    return total; // aqui faz aparecer o valor total (total é a variavél para substituir o valor)
};

function adicionarProduto(novoProduto) { //variavél da função abragente para escolher o produto no index.
    produtos = [ // vai ao objeto de produtos
        ...produtos, // pega os produtos escrito nos objetos anteriormente.
        novoProduto // aqui vai acrescentar o novo produto que sera feito no index.
    ];
};

export {mostrarProdutos, filtrarPorCategoria, somarPrecos, adicionarProduto }; // aqui é para exportar as informações para o index.