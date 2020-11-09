import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import './App.css';
import Carrinho from './components/Carrinho';
import styled from 'styled-components';
import cart2 from './img/cart2.png';
import Produtos from './components/Produtos'
import Filtros from './components/Filtros'

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
width: 5em;
height: 5em;
border-radius: 100%;


&:hover {
color: rgb(136,34,136);
border: 0.1em solid rgb(136,34,136);
background-color: #FFFFFF;
}   
`
let produtos = [
    {
      id: 1,
      name: "Foguete Missão Apolo II",
      value: 1000,
      ImageUrl: "https://picsum.photos/200/200",
      votoPositivo: 0,
      votoNegativo: 0
    },
    {
      id: 2,
      name: "Conga",
      value: 5000,
      ImageUrl: "https://picsum.photos/200/201",
      votoPositivo: 5432,
      votoNegativo: 221
    },
    {
      id: 3,
      name: "Kichute",
      value: 100,
      ImageUrl: "https://picsum.photos/200/202",
      votoPositivo: 1259,
      votoNegativo: 2
    },
    {
      id: 4,
      name: "AllStar",
      value: 250,
      ImageUrl: "https://picsum.photos/200/203",
      votoPositivo: 5618,
      votoNegativo: 25
    },
    {
      id: 5,
      name: "Nike",
      value: 390,
      ImageUrl: "https://picsum.photos/200/204",
      votoPositivo: 31,
      votoNegativo: 2
    },
    {
      id: 6,
      name: "Adidas",
      value: 269,
      ImageUrl: "https://picsum.photos/200/205",
      votoPositivo: 12,
      votoNegativo: 1
    },
    {
      id: 7,
      name: "Puma",
      value: 425,
      ImageUrl: "https://picsum.photos/200/206",
      votoPositivo: 42,
      votoNegativo: 1
    },
    {
      id: 8,
      name: "Vans",
      value: 250,
      ImageUrl: "https://picsum.photos/200/207",
      votoPositivo: 10,
      votoNegativo: 0
    }
  ];




export default class App extends React.Component {
  state = {
      mostrarCarrinho: false,
      carrinho: [],
      valorMinimoFiltro: 0,
      valorMaximoFiltro: 9999,
      buscaPeloNome: ''
  }  

  handleClick = () => {
    this.setState({mostrarCarrinho: !this.state.mostrarCarrinho})
  }

  onChangeMinimoFiltro = (event) => {
    this.setState({valorMinimoFiltro: event.target.value})
  }

  onChangeMaximoFiltro = (event) => {
    this.setState({valorMaximoFiltro: event.target.value})
  }

  onChangeBuscaPeloNome = (event) => {
    this.setState({buscaPeloNome: event.target.value})
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

  votarNegativo = (id) => {

    let novaLista = produtos.map((produto) => {

      if(produto.id === id) {
        return {
          ...produto,
          votoNegativo: produto.votoNegativo + 1
        } } else {
          return produto
        }
      }
    )

    produtos = novaLista
    this.forceUpdate()
    }


    votarPositivo = (id) => {

      let novaLista = produtos.map((produto) => {
  
        if(produto.id === id) {
          return {
            ...produto,
            votoPositivo: produto.votoPositivo + 1
          } } else {
            return produto
          }
        }
      )
  
      produtos = novaLista
      this.forceUpdate()
      }
   
  
  
    

  render() {  

   

       return (
            
            <div className="App">
              
              <Header/>

              <section>
                <Filtros 
                valorMinimoFiltro={this.state.valorMinimoFiltro} 
                valorMaximoFiltro={this.state.valorMaximoFiltro} 
                buscaPeloNome={this.state.buscaPeloNome}
                onChangeMinimoFiltro={this.onChangeMinimoFiltro}
                onChangeMaximoFiltro={this.onChangeMaximoFiltro}
                onChangeBuscaPeloNome={this.onChangeBuscaPeloNome}
                />

                <Produtos 
                produtos={produtos} 
                adicionarAoCarrinho={this.adicionarAoCarrinho}
                valorMinimoFiltro={this.state.valorMinimoFiltro} 
                valorMaximoFiltro={this.state.valorMaximoFiltro} 
                buscaPeloNome={this.state.buscaPeloNome} 
                votarNegativo={this.votarNegativo}
                votarPositivo={this.votarPositivo}
                />

                {this.state.mostrarCarrinho ? <Carrinho carrinho={this.state.carrinho} removerDoCarrinho={this.removerDoCarrinho} /> : <div></div> }
              
              </section>

              <BotaoCarrinho onClick={this.handleClick}><img className="image" src={cart2}/></BotaoCarrinho>
              
              <Footer />
              
            </div>
        );

  }

}




