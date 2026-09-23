import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";


function App() {
  return (
    <>
      <Cabecalho />
      <Conteudo 
      titulo="Meu portfólio" 
      descricao="Projetos que desenvolvi estudando front-end"
/>
      <Conteudo 
      titulo="Meus projetos" 
      descricao="Confira alguns dos meus trabalhos"
/>
      <Rodape />
    </>
  );
}

export default App;

//aqui juntas todos os componentes criados com os import e as funções.