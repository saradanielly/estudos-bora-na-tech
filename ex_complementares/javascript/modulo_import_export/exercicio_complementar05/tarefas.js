const listaTarefas = {
    nome: "faxina sabado",
    tarefas: [
        "lavar casa", "lavar roupa"
    ]
};

function mostrarTarefas() {
    return listaTarefas.tarefas;
};

function adicionarTarefa(tarefa) {
    listaTarefas.tarefas = [
        ...listaTarefas.tarefas,
        tarefa
    ];
};

export {listaTarefas, mostrarTarefas, adicionarTarefa };