const produtos = document.querySelector("#produtos");

produtos.innerHTML = "carregando produtos ...";

fetch("https://dummyjson.com/products")
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error("erro ao buscar produtos");
        }
        return resposta.json();
    })

    .then((dados) => {

        if (dados.products.length ===0) {
            produtos.innerHTML = "Nenhum produto encontrado.";
            return;
        }

        produtos.innerHTML ="";

        dados.products.forEach((produto) => {
            produtos.innerHTML += `
            <div>
                <h2>${produto.title}</h2>
                <p>R${produto.price}</p>
                </div>
                `;
        });
    })
    .catch((erro) => {
        produtos.innerHTML =`
        <p>Não foi possível carregar os produtos.<p>
        <button>Tentar novamente</button>
        `;

        console.log(erro);
    });


/*
dados.products = []; - testar sem dados;
fetch("https://dummyjson.com/produtos") - testar erros.
*/