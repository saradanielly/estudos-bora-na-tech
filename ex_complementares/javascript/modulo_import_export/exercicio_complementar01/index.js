import {converterCelsius, converterFahrenheit} from "./conversor.js"

const convercaoCelsius = converterCelsius(38);
const conversaoFahrenheit = converterFahrenheit(38);

console.log("Resultado da converção em celsius:", convercaoCelsius);
console.log("Resultado da converção em Fahrenheit", conversaoFahrenheit);