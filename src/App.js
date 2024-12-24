import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Anime from "./componentes/Anime";

function App() {
  const animes = [
    {
      nome: "Bleach",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },

    {
      nome: "Demon Slayer",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },

    {
      nome: "Jujutsu Kaisen",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },

    {
      nome: "Kaiju N8",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },

    {
      nome: "Naruto",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },

    {
      nome: "One Piece",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },

    {
      nome: "Solo Leveling",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    debugger
    setPersonagens([...personagens, personagem]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        animes={animes.map((anime) => anime.nome)}
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemAdicionado(personagem)
        }
      />

      {animes.map((anime) => (
        <Anime
          key={anime.nome}
          nome={anime.nome}
          corPrimaria={anime.corPrimaria}
          corSecundaria={anime.corSecundaria}
          personagens={personagens.filter(
            (personagem) => personagem.anime === anime.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
