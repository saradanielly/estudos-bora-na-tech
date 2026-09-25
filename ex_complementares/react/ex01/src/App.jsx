import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Caixa from "./components/caixa";
import Contador from "./components/Contador";
import MostrarTexto from "./components/MostrarTexto";
import Nome from "./components/Nome";
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
      quantidade={5} /* envia um número.*/
      disponivel={true} /* booleano=envia true/false para controlar condição*/
/>

    <Caixa>
      <h2>Meu Portfólio</h2>
      <p>Projetos de front-end</p>
    </Caixa>

    <Contador/>

    <MostrarTexto></MostrarTexto>

    <Nome></Nome>

      <Rodape />
    </>
  );
}

export default App;

/*aqui juntas todos os componentes criados com os import e as funções.*/