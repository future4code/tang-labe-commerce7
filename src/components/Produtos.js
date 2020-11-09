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
  gap: 20px;
`;

export default class Produtos extends React.Component {

    state =  {
        sort: 'CRESCENTE',
    }

    getListaFiltrada = () => {
        return this.props.produtos
        .filter((produtos) => this.props.valorMinimoFiltro ? produtos.value > this.props.valorMinimoFiltro : true)
        .filter((produtos) => this.props.valorMaximoFiltro ? produtos.value < this.props.valorMaximoFiltro : true)
        .filter((produtos) => this.props.buscaPeloNome ? produtos.name.includes(this.props.buscaPeloNome) : true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
    }

    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
    }


    render() {
        
        const listaFiltrada = this.getListaFiltrada()

      return (
        <Container>
          <ContainerInterno>
            <ContainerDois>
              <p>Quantidade de produtos: {listaFiltrada.length} </p>
              <label>
                Ordenação:
                <select value={this.state.sort} onChange={this.onChangeSort}>
                  <option value={'CRESCENTE'}>Crescente</option>
                  <option value={'DECRESCENTE'}>Decrescente</option>
                </select>
              </label>
            </ContainerDois>
  
            <GridDeProdutos>
              {listaFiltrada.map((produtos) => {
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
  