const nomes = ["Ana", "Carlos", "Pedro", "Maria", "João"]

for (const nome of nomes) {
    if (nome === "Pedro") {
        continue;
    }

    if (nome === "Maria") {
        break
    }

    console.log(nome);
}