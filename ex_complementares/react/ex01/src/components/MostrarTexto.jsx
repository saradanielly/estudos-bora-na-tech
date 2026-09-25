import { useState } from "react";

function MostrarTexto() {
    const[visivel, setVisivel] = useState(true); 

    return (
        <>
        <button onClick={() => setVisivel(!visivel)}>
             {visivel ? "esconder" : "mostrar"}
        </button>

   
        <p>{visivel && "texto visivel"} </p>

        </>
    );
}

export default MostrarTexto;

/*
isso serve para mostrar e esconder textos na forma booleano, usando o true.
*/