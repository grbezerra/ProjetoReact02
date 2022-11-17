import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { Image } from "./components/Image";
import { Repositorios } from "./components/Repositorios";
import "./App.css";

function App() {

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
      <br />      
      <Repositorios />
      <br />
      <p className="read-the-docs">
        ʕ•ᴥ•ʔ - Feito por Gabriela Bezerra (Aluna Front-End On20) - ʕ•ᴥ•ʔ.
      </p>      
    </div>
  );
}

export default App;
