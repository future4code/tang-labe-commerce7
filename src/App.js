import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';
import Carrinho from './components/Carrinho';
import styled from 'styled-components';
import cart2 from './img/cart2.png';
import Produtos from './components/Produtos'


const BotaoCarrinho = styled.button`
display: inline-block;
padding: 0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0.2em 0.3em;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
text-align:center;
transition: all 0.2s;
background-color: rgb(136,34,136);
width: 100px;
height: 100px;
border-radius: 100%;

&:hover {
color: rgb(136,34,136);
border: 0.1em solid rgb(136,34,136);
background-color: #FFFFFF;
}   
`
const produtos = [
    {
      id: 1,
      name: "Foguete Missão Apolo II",
      value: 1000,
      ImageUrl: "https://picsum.photos/200/200"
    },
    {
      id: 2,
      name: "Conga",
      value: 5000,
      ImageUrl: "https://picsum.photos/200/201"
    },
    {
      id: 3,
      name: "Kichute",
      value: 100,
      ImageUrl: "https://picsum.photos/200/202"
    },
    {
      id: 4,
      name: "AllStar",
      value: 250,
      ImageUrl: "https://picsum.photos/200/203"
    },
    {
      id: 5,
      name: "Nike",
      value: 390,
      ImageUrl: "https://picsum.photos/200/204"
    },
    {
      id: 6,
      name: "Adidas",
      value: 269,
      ImageUrl: "https://picsum.photos/200/205"
    },
    {
      id: 7,
      name: "Puma",
      value: 425,
      ImageUrl: "https://picsum.photos/200/206"
    },
    {
      id: 8,
      name: "Vans",
      value: 250,
      ImageUrl: "https://picsum.photos/200/207"
    }
  ];



function CarrinhoDeCompras(props) {
  if (!props.car) {
    return null;
  }
  return (
    <Carrinho/>
    
  );
}

export default class App extends React.Component {
  state = {
      mostrarCarrinho: false,
      carrinho: [
      {
        id: "",
        name: "",
        value: "",
        ImageUrl: "https://picsum.photos/200/207",
        quantidade: 1
      }
    ],
    valorMinimoFiltro: 0,
    valorMaximoFiltro: 0,
    buscaPeloNome: '',
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

  adicionarAoCarrinho = (id) => {
    const itensNoCarrinho = this.state.carrinho.find(produto => id === produto.id)
    
    if(itensNoCarrinho) {
      const novoItemNoCarrinho = this.state.carrinho.map(produto => {
        if(id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto
      })

      this.setState({ carrinho: novoItemNoCarrinho })
      } else {
        const novoProduto = produtos.find(produto => id === produto.id)

        let novaLista = [...this.state.carrinho, {...novoProduto, quantidade: 1}]
      
        this.setState({carrinho: novaLista})
      }
    }

  removerDoCarrinho = (id) => {
    const itemNoCarrinho = this.state.carrinho.map((produto) => {
      if(produto.id === id) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({carrinho: itemNoCarrinho})
  }

  render() {  

    return (
            
            <div className="App">
              
              <Header/>

              <Produtos produtos={produtos} adicionarAoCarrinho={this.adicionarAoCarrinho} />
              <Carrinho car={this.state.mostrarCarrinho} carrinho={this.state.carrinho} removerDoCarrinho={this.removerDoCarrinho} />
              <BotaoCarrinho onClick={this.mostrarCarrinhoAoClicar}><img src={cart2}/></BotaoCarrinho>

              <Footer />
              
            </div>
        );

  }

}




