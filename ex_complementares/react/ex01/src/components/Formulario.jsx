import { useState } from "react";


function Formulario() {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviado, setEnviado] = useState(false);

    return (
        <>
        <input value={nome} 
        onChange={(evento) => setNome(evento.target.value)}/>

        <textarea
        value={mensagem}
        onChange={(evento) => setMensagem(evento.target.value)}/>
            
       <button onClick={() => setEnviado(true)}>
            Enviar
        </button>
        

    {enviado && (
            <div>
                <p>Nome: {nome}</p>
                <p>Mensagem: {mensagem}</p>
            </div>
    )}

    </>
)};

export default Formulario;