import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { Image } from "./components/Image";
import { Repositorios } from "./components/Repositorios";
import "./App.css";

function App() {
  function ligaClick() {
    console.log("estou clicando");
  }

  function pegaInput(event) {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <Header>Meu GitHub Search!</Header>
      <br />
      <Title></Title>
      <Subtitle>
        Aluna do Reprograma Front-End On20, Advogada, Tecnóloga em Investigação
        Forense e Perícia Criminal, Empreendedora, CEO da Loja Virtual OutFit
        Bezerra e migrando de carreira na flor da idade.
      </Subtitle>
      <br />
      <Image />

      <div className="card">
        <input className="input" placeholder="Busque o repositório \(•◡•)/" onChange={pegaInput} />

      </div>
      <Repositorios />
      <br />
      <p className="read-the-docs">
        ʕ•ᴥ•ʔ - Feito por Gabriela Bezerra (Aluna Front-End On20) - ʕ•ᴥ•ʔ.
      </p>      
    </div>
  );
}

export default App;
