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
O que aprendemos aqui foi a RENDERIZAÇÃO CONDICIONAL, traduzindo: dependendo do estado, mostre uma coisa 
ou outra ({visivel && "texto visível"});

TERNÁRIO ? :({visivel ? "Esconder" : "Mostrar"}), é usado quando queremos duas possibilidades, no caso esconder ou mostrar,
com verdadeiro ou falso (true and false);

isso serve para mostrar e esconder textos na forma booleano, usando o true.
*/