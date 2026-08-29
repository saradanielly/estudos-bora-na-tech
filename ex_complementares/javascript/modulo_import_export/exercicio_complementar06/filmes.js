let filmes = [

    {
        titulo: "resgate",
        genero: "ação",
        ano: 2024
    },

    {
        titulo: "Moana 2",
        genero: "animação",
        ano: 2026
    },

    {
        titulo: "DeadPool",
        genero: "ação",
        ano: 2020
    }
];

function mostrarFilmes() {
    return filmes;
};

function filtrarPorGenero(genero) {
    return filmes.filter((filme) => {
     return filme.genero === genero
    });
};

export {filmes, mostrarFilmes, filtrarPorGenero };