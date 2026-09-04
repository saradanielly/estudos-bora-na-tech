const tarefa = document.querySelector("#tarefa");
const adicionar = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");

//recupera as tarefas salvas e cria o array vazio
let tarefas = JSON.parse(
    localStorage.getItem("tarefas")
) || [];

//função para criar e mostrar uma tarefa
function criarTarefa(item) {

    const novaTarefa = document.createElement("li"); //cria o <li>

    novaTarefa.textContent = item; //coloca o texto da tarefa


    const botaoExcluir = document.createElement("button"); //cria o botão de excluir

    botaoExcluir.textContent = "Excluir"; //texto do botão


    botaoExcluir.addEventListener("click", () => { //o evento de excluir a tarefa

        novaTarefa.remove(); //remove da tela


        tarefas = tarefas.filter((itemAtual) => //remove do array
            itemAtual !== item
        );


        localStorage.setItem( //atualiza o localStorage com as tarefas que sobrou
            "tarefas",
            JSON.stringify(tarefas)
        );

    });


    novaTarefa.append(botaoExcluir); // coloca o botão de excluir dento do <li>

    lista.append(novaTarefa); //coloca o <li> na lista
}

//mostra as tarefas que já estao salvas
tarefas.forEach((item) => {

    criarTarefa(item);

});

// adiciona uma nova tarefa
adicionar.addEventListener("click", () => {

    const tarefaDigitada = tarefa.value.trim(); // pega o texto digitado e remove espaços desnecessários

// verifica se a caixa está vazia e emite um alerta
    if (tarefaDigitada === "") {

        alert("Digite uma tarefa!");

        return;

    }


    tarefas.push(tarefaDigitada); //adiciona a tarefa no array

//salva no localStorage
    localStorage.setItem(
        "tarefas",
        JSON.stringify(tarefas)
    );


    criarTarefa(tarefaDigitada); //cria e mostra a tarefa na tela


    tarefa.value = ""; //limpa o input para escrever novas tarefas

});