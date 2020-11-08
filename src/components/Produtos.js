import React from "react";
import styled from "styled-components";
import Cartao from "./Cartao";

const Container = styled.div`
  display: flex;
  flex-grow: 3;
  align-self: stretch;
  justify-content: center;
`;
const ContainerInterno = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-self: stretch;
`;

const GridDeProdutos = styled.div`
  margin: 1em 0.5em;
  display: grid;
  grid-template: 1fr 1fr / repeat(4, 1fr);
  gap: 0.5em;
`;
const ContainerDois = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default class produtos extends React.Component {
    render() {
      return (
        <Container>
          <ContainerInterno>
            <ContainerDois>
              <p>Quantidade de produtos: 4</p>
              <label>
                {" "}
                Ordenação:
                <select>
                  <option>Crescente</option>
                  <option>Decrescente</option>
                </select>
              </label>
            </ContainerDois>
  
            <GridDeProdutos>
              {this.props.produtos.map((produtos) => {
                return (
                  <Cartao
                    produtos={produtos}
                    adicionarAoCarrinho={this.props.adicionarAoCarrinho}
                  />
                );
              })}
            </GridDeProdutos>
          </ContainerInterno>
        </Container>
      );
    }
  }
  