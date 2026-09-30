import { useState } from "react";

function ListaNome() {
    const [nome, setNome] = useState("");
    const [lista, setLista] = useState([]);

    return (
        <>
        <input value={nome} 
        onChange={(evento) => setNome(evento.target.value)}/>

        <button onClick={() => {
        if (nome.trim() === "") {
            return;
          }  
          setLista([...lista, nome])  
          
          setNome("");
}} >
            Adicionar
        </button>

        {lista.map((item) => (
            <p key={item}>{item}</p>
        ))}
        </>
    )  
}

export default ListaNome;

/*
Usamos o setLista([...lista, nome]), pois o ...lista espalha os itens que já existem;
E o lista.map() para não modificar o array, e sim criar um novo valor;
Key, é usado pelo react para uma indentificação unica para cada elemento;

*/