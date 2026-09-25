function Conteudo({titulo, descricao, quantidade, disponivel}) {
    return (
        <>
    <h2> {titulo} </h2>
    <p>{descricao}</p>
    <p>{quantidade}</p>
    <p>{disponivel && "Projetos disponíveis"} </p>
    </>
);
}

export default Conteudo;

// isso seria o componente do react, que é a função JS que retorna JSX.

// com o props fica mais fácil reutilizar os dados alterando somente no App.jsx.