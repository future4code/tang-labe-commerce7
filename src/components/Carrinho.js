import React from 'react';
import styled from 'styled-components';
import ItemCarrinho from './ItemCarrinho';

const CarrinhoDiv = styled.div`
    border: groove;
    border-color: rgba(136,34,136, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 1em;  
`
const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
`


export default class Carrinho extends React.Component {

    valorTotal = () => {
        let totalValue = 0
    
        for(let produto of this.props.carrinho) {
          totalValue += produto.value*produto.quantidade
         }
         return totalValue
        
      }
    
    render () {
        return(
            <div>
                <CarrinhoDiv>
                    <h2>Carrinho</h2>
                    <ContainerInterno>
                    {this.props.carrinho.map((produtos) => {
                  return <ItemCarrinho itensCarrinho={produtos} removerDoCarrinho={this.props.removerDoCarrinho} />
                })} 
                    </ContainerInterno>
                    <h4>Valor Total: R${this.valorTotal()},00</h4>        
                </CarrinhoDiv>
            </div>
        )
    }
}