import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [caracteristica, setCaracteristica] = useState('')
  const [imagem, setImagem] = useState('')
  const [anime, setAnime] = useState('')
  

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoPersonagemCadastrado({
      nome,
      caracteristica,
      imagem,
      anime
    })
    setNome('')
    setCaracteristica('')
    setImagem('')
    setAnime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem</h2>
        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o nome do personagem" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />
        <CampoTexto 
            obrigatorio={true} 
            label="Característica" 
            placeholder="Digite a característica" 
            valor={caracteristica}
            aoAlterado={valor => setCaracteristica(valor)}
            />
        <CampoTexto 
            label="Imagem" 
            placeholder="Digite o endereço da imagem" 
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />
        <ListaSuspensa 
            obrigatorio={true} 
            label="Animes" 
            itens={props.animes} 
            valor={anime}
            aoAlterado={valor => setAnime(valor)}
            />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
