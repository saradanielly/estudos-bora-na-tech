import { useState } from "react";

function ListaTarefa() {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function excluirTarefa(id) {
        setTarefas(
                    tarefas.filter((item) => item.id !== id)
                );
}

    function concluirTarefa(id) {
        setTarefas(
            tarefas.map((item) => {
                return item.id === id
              ?  {
                    ...item,
                    concluida: true
                }
                :item;
            })
        );
    }

    return (
        <>
        <input
        value={tarefa}
        onChange={(evento) => setTarefa(evento.target.value)}
        />

        <button onClick={() => {
             setTarefas([
            ...tarefas, 
            {
                id: Date.now(),
                texto: tarefa,
                concluida: false
            } 
            
        ]);
        setTarefa("");
    }} >
        Adicionar</button>

        {tarefas.map((item) => (
            <p key={item.id}>
                {item.texto} 
                {item.concluida && " ✅"}
                
            <button onClick={() => concluirTarefa(item.id)}>
                
                Concluir
            </button>

            <button onClick={() => excluirTarefa(item.id)}>
                    
                Excluir
            </button>
            
            </p>
        ))}
        </>
    );
}

export default ListaTarefa;

/*
no tarefas.filter: item.id (identifica que id foi clicado, ou seja a tarefa), e o !== id (diz que todo id diferente do 
que foi clicado, continua);
e quando adiciona, cada tarefa recebe um ID prórpio. Assim, na hora de excluir, ele só exclui o mesmo ID que foi
selecionado.


useState: para guardar as tarefas;
onChange: para pegar o que você digita;
setTarefas: para adicionar;
map(): para mostrar as tarefas;
key: com item.id;
filter(): para excluir;
map(): novamente para alterar uma tarefa;
concluida: true/false;
&& para mostrar o ✅;
limpar o input com setTarefa("").

*/