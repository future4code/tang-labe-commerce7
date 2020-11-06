import React from 'react';
import Cartao from './Cartao';
import styled from 'styled-components'

const CarrinhoDiv = styled.div`
    border: groove;
    border-color: rgba(136,34,136, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
`

export class Home extends React.Component {

  state = {
    produtos: [
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
    ],
    carrinho: []

  }
  
 adicionarAoCarrinho = (id) => {
  let novoProduto = {
    id: '',
    name: '',
    value: 0,
    ImageUrl: ''
  }
    
  this.state.produtos.map((produto) => {
      if (id === produto.id){
        novoProduto = {
          id: produto.id,
          name: produto.name,
          value: produto.value,
          ImageUrl: produto.ImageUrl
        } } else {return false}
      }
    )

    
    let novaLista = [...this.state.carrinho, novoProduto]
    this.setState({carrinho: novaLista})

    console.log(this.state.carrinho)

  }


  render() {  

    return (
            
            <div className="Home">
              
              {this.state.produtos.map((produto) =>

                  <Cartao foto={produto.ImageUrl} valor={produto.value} nome={produto.name} adicionar={()=> this.adicionarAoCarrinho(produto.id)} />
                ) 
              }
            </div>
        );

  }

}
export default Home;
