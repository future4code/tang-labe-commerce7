import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons'
import like from './imgs/like.png';
import dislike from './imgs/dislike.png';


const Card = styled.div`
box-shadow: 2px 2px 4px rgba(136,34,136, 1);
padding: 0.4em 0;

`

const Votes = styled.div`
display: flex;
justify-content: space-evenly;
`

export default class Cartao extends React.Component {
  
  render() {  
    
    const produto = this.props.produtos

    return (
            
            <div className="Cartao">
              
              <Card>
                <img src={produto.ImageUrl} />
                <div>R$ {produto.value}</div>
                <div>{produto.name}</div>
                <Buttons onClick={() => this.props.adicionarAoCarrinho(produto.id)}>Adicionar ao carrinho</Buttons>
                <Votes>
                  <span>{produto.votoPositivo}<img className="image-2" src={like} onClick={() => this.props.votarPositivo(produto.id)} /></span>
                  <span>{produto.votoNegativo}<img className="image-2" src={dislike} onClick={() => this.props.votarNegativo(produto.id)} /></span>
                </Votes>
              </Card>
              
            </div>
        );

  }

}

