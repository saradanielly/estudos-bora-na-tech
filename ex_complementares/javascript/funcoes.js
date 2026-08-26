const verificarNota = (nota) => {
    if (nota < 0 || nota >10) {
        return "Nota inválida";
    }

    if (nota >= 7) {
        return "Aprovado";
    }

    if (nota >= 5) {
        return "Recuperação";
    }

    return "Reprovado"
};

console.log(verificarNota(8)); // aprovado
console.log(verificarNota(6)); // recuperação
console.log(verificarNota(3)); // reprovado
console.log(verificarNota(15)); // nota inválida