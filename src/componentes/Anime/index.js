import Personagem from "../Personagem";
import "./Anime.css";

const Anime = (props) => {
  return (   
    props.personagens.length > 0  &&
      <section className="anime" style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="personagens">
          {props.personagens.map((personagem) => {
            console.log(<Personagem
            key={personagem.nome}
            nome={personagem.nome}
            caracteristica={personagem.caracteristica}
            imagem={personagem.imagem}
            corDeFundo={props.corPrimaria}
          />);
            return <Personagem
            key={personagem.nome}
            nome={personagem.nome}
            caracteristica={personagem.caracteristica}
            imagem={personagem.imagem}
            corDeFundo={props.corPrimaria}
          />
          })}
        </div>
      </section>
  )
}

export default Anime
