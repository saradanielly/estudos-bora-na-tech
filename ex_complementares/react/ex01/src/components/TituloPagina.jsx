import { useEffect, useState } from "react";


function TituloPagina() {
    const [cliques, setCliques] = useState(0)

    useEffect(() => {
    document.title = `Meu Portfólio-${cliques} cliques`;
}, [cliques]);

    return( 
    <>
    <h2>Meu Portfólio</h2>
    <button onClick={() => setCliques(cliques + 1)}>
        {cliques}
    </button>

    </>
    );
}

export default TituloPagina;

/*
RETURN <> </>, é onde colocamos todos os elementos que vai aparecer na tela, como o h2 e p botão.
*/
