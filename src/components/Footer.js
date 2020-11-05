import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
box-shadow: 2px 2px 4px rgba(136,34,136, 1);
border-top: 0.2em solid rgba(136,34,136, 0.8);
padding: 0.4em 0;
font-size: 1em;
margin-top: 1em;

`

export default class Footer extends React.Component {
  
  render() {  

    return (
            
            <div className="Footer">
              
              <FooterStyle>
              Desenvolvido por Tiago Sestari e Leticia Felix @Labenu
              </FooterStyle>
              
            </div>
        );

  }

}
