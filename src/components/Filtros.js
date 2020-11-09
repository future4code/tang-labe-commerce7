import React from 'react';
import styled from 'styled-components';


const FiltroDiv = styled.div`
    border: groove;
    border-color: rgba(136,34,136, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
`
const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  margin-bottom: 10px;
`


export default class Filtros extends React.Component {

    
    render () {
        return(
            <div>
                <FiltroDiv>

                    <h3>Filtros:</h3>
                    <ContainerInterno>Valor Mínimo:
                        <input type="number"
                        value={this.props.valorMinimoFiltro}
                        onChange={this.props.onChangeMinimoFiltro} />
                    </ContainerInterno>

                    <ContainerInterno>Valor máximo:
                        <input type="number"
                        value={this.props.valorMaximoFiltro}
                        onChange={this.props.onChangeMaximoFiltro} />
                    </ContainerInterno>

                    <ContainerInterno>Buscar pelo nome:
                        <input type="text" 
                        value={this.props.buscaPeloNome}
                        onChange={this.props.onChangeBuscaPeloNome} />
                    </ContainerInterno>

                </FiltroDiv>
            </div>
        )
    }
}