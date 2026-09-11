const input = document.querySelector('#input-cep');
const btnBuscar = document.querySelector('#btn-busca-cep');
const dadosBuscados = document.querySelector('.data-cep');

/*
Pegue o CEP digitado → faça uma busca na API → espere a resposta → 
transforme a resposta em JSON → passe os dados para a função que mostra na tela.
*/
function procurarCep() {
    const cep = input.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(data => {
        if(!data.ok) {
            throw new Error('Erro na conexao via internet')
        }
        return data.json();
    })
    .then(data => {
        
        mostrarDadosNaTela(data);
    });
}

/*
Receba os dados e monte o HTML usando as informações que vieram da API.
*/
function mostrarDadosNaTela(dados) {
    input.value = '';
    dadosBuscados.innerHTML = '';

    dadosBuscados.innerHTML += `
        <ul>
            <li><b>RUA: </b> ${dados.logradouro} </li>
            <li><b>UF: </b> ${dados.uf} </li>
            <li><b>BAIRRO: </b> ${dados.bairro} </li>
            <li><b>DDD: </b> ${dados.ddd} </li>
            
        </ul>
    `;
}

