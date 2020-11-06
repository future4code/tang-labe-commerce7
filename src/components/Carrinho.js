import React from 'react';
import styled from 'styled-components';
import Home from './Home';

const CarrinhoDiv = styled.div`
    border: groove;
    border-color: rgba(136,34,136, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
`

export default class Carrinho extends React.Component {

    
    render () {
        return(
            <div>
                <CarrinhoDiv>
                    <h2>Carrinho</h2>
                    <h4>Valor Total:</h4>
                </CarrinhoDiv>
            </div>
        )
    }
}