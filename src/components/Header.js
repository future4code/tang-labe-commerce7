import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
box-shadow: 2px 2px 4px rgba(136,34,136, 1);
padding: 0.4em 0;
font-size: 2em;
margin-bottom: 1em;

`

export default class Header extends React.Component {
  
  render() {  

    return (
            
            <div className="Header">
              
              <HeaderStyle>
              👾 LabeCommerce 👾
              </HeaderStyle>
              
            </div>
        );

  }

}
