function Conteudo({titulo, descricao}) {
    return (
        <>
    <h2> {titulo} </h2>
    <p>{descricao}</p>
    </>
);
}

export default Conteudo;

// isso seria o componente do react, que é a função JS que retorna JSX.

// com o props fica mais fácil reutilizar os dados alterando somente no App.jsx.