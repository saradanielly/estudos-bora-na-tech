/*
function calcularArea(largura, altura = largura) {
    return largura * altura;
}

console.log(calcularArea(5));
console.log(calcularArea(5, 3));
*/

/*
function verificarIdade (idade) {
    if (idade < 18) {
        return "Acesso negado";
    }

    return "Acesso permitido";
}

console.log(verificarIdade(20));

*/

function somarNumeros(...numeros) {
    let total = 0 
    
    for (const numero of numeros) {
        total += numero;
    }

    return total;
}

console.log(somarNumeros(10, 20, 30));
console.log(somarNumeros(5, 10, 15, 20));

