import React from 'react';
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Guilherme</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007D'}
            <div>
              Nome:<span className="blue">Guilherme,</span>
            </div>
            <div>
              Sobrenome:<span className="blue">Barros</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007D'}
            <div>
              Função:<span className="blue">Desenvolvedor</span>
            </div>
            <div>
              Area:<span className="blue">Front-End</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
