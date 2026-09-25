import { useState } from "react";

function Contador() {
const [cliques, setCliques] = useState(0);

    return (
<button onClick={() => setCliques(cliques + 1)}>
    {cliques}
</button>
    );
    
}

export default Contador;

/*
Com isso não precisamos utilizar aquele processo todo do DOM.
Aqui ele criou um contador de um maneira mais simples e sem utilizar as tags no html.
o useState é a manipulação dos objetos em jsx.
*/