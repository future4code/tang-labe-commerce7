import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
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
&:hover {
color: rgb(136,34,136);
border: 0.1em solid rgb(136,34,136);
background-color: #FFFFFF;
}
`

const Card = styled.div`


box-shadow: 2px 2px 4px rgba(136,34,136, 1);
padding: 0.4em 0;

`

export default class Cartao extends React.Component {
  
  render() {  

    return (
            
            <div className="Cartao">
              
              <Card>
                <img src={this.props.foto} />
                <div>R$ {this.props.valor}</div>
                <div>{this.props.nome}</div>
                <Buttons onClick={this.props.adicionar}>Adicionar ao carrinho</Buttons>
              </Card>
              
            </div>
        );

  }

}

