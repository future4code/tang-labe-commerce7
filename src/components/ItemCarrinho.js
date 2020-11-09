import React from "react";
import styled from "styled-components"
import Buttons from './Buttons'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  gap: 10px;
`

export default class ItemCarrinho extends React.Component {

  render () {
      return(
          <Container>
              <p>{this.props.itensCarrinho.quantidade}</p>
              <p>{this.props.itensCarrinho.name}</p>
              <Buttons 
              onClick={() => this.props.removerDoCarrinho(this.props.itensCarrinho.id)}> X </Buttons>
              
          </Container>
      )}
      }