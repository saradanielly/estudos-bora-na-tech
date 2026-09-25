import { useState } from "react";

function Nome() {
    const [nome, setNome] = useState("");

    return (
        <>
        <input 
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        />

        <p>
            Olá, {nome}
        </p>
        </>
    );
}

export default Nome;

/*
usando o useState para criar um formulario com o nome.
*/