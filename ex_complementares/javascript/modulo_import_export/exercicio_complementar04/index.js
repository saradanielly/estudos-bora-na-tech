import {usuario, mostrarNome, adicionarHabilidade, mostrarHabilidades } from "./usuario.js"

console.log ("meu nome é:", mostrarNome());
console.log ("minhas habilidades são:", mostrarHabilidades());

adicionarHabilidade("javascript");

console.log ("minhas habilidades agora são:", mostrarHabilidades());