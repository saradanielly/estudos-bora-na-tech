import {somar, multiplicar, subtrair } from "./calculo.js"

const resultadoSoma = somar(10, 5);
const resultadoMultiplicacao = multiplicar(10, 5);
const resultadoSubtracao = subtrair(10, 5);

console.log("Resultado da soma:", resultadoSoma);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Resultado da subtração", resultadoSubtracao);