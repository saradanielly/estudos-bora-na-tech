let numeros = [
    1, 2, 3, 4, 5, 6, 7
];

function numerosPares() {
   return numeros.filter((numero) => {
    return numero % 2 === 0
   });
};

function somarNumeros() {
    let total = numeros.reduce(
        (acumulador, numero) => acumulador + numero, 0
    );

    return total;
};

export {numeros, numerosPares, somarNumeros };