import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Cartao from './components/Cartao';
import Footer from './components/Footer';
import './App.css';
import Carrinho from './components/Carrinho';
import styled from 'styled-components';
import cart2 from './img/cart2.png';


const BotaoCarrinho = styled.button`
    width: 10%   
`

function CarrinhoDeCompras(props) {
  if (!props.car) {
    return null;
  }
  return (
    <Carrinho />
  );
}

export default class App extends React.Component {
  state = {
    mostrarCarrinho: false

  }  
  constructor(props) {
    super(props);
    this.mostrarCarrinhoAoClicar = this.mostrarCarrinhoAoClicar.bind(this);
  }

  mostrarCarrinhoAoClicar() {
    this.setState(prevState => ({
      mostrarCarrinho: !prevState.mostrarCarrinho
    }));
  }

  render() {  

    return (
            
            <div className="App">
              <Header/>
              <Home />
              <CarrinhoDeCompras car={this.state.mostrarCarrinho}/> 
              <BotaoCarrinho onClick={this.mostrarCarrinhoAoClicar}><img src={cart2}/></BotaoCarrinho>
              <Footer />
              
            </div>
        );

  }

}




