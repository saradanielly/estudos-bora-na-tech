import {listaTarefas, mostrarTarefas, adicionarTarefa } from "./tarefas.js"

console.log ("nome da lista é:", listaTarefas.nome);
console.log ("as tarefas da faxina são:", mostrarTarefas());

adicionarTarefa("molhar as plantas");

console.log ("minhas tarefas agora são:", mostrarTarefas());