import React from "react";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export default class ItemCarrinho extends React.Component {

  render () {
      return(
          <Container>
              <p>{this.props.itensCarrinho.quantidade}</p>
              <p>{this.props.itensCarrinho.name}</p>
              <button 
              onClick={() => this.props.removerDoCarrinho(this.props.itensCarrinho.id)}> Remover </button>
              
          </Container>
      )}
      }