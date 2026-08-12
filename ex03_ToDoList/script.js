/*
Lista de tarefas:
[x] saber quando o botão for clicado
[x] pegar o texto dentro do input
[x] colocar o texto na tela
[x] deletar a tarefa na tela
*/

function adicionarTarefa(){
    let valorDoInput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value=''
}

function deletarTarefa(li) {
    li.parentElement.remove()
}