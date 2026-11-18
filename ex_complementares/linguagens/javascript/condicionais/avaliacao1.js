const nota = '4'

const classificacoes = {
    "1" : "Muito ruim",
    "2" : "Ruim",
    "3" : "Regular",
    "4" : "Bom",
    "5" : "Excelente"
};

console.log(classificacoes[nota] ?? "Nota inválida");