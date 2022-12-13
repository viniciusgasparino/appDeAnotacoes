import styled from "styled-components"


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  gap: 15px;
  height: 200px;
  margin-top: 20px;
  width: 200px;
  background-color:  #c8b8e0;
`

const StyledIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`



function Card(props){
  return(
    <StyledCard>
      <h2>Titulo: {props.titulo}</h2>
      <p>Marca: {props.marca}</p>
      <p>Quantidade: {props.quantidade}</p>
      <p>Preço Unitário: {props.preco}</p>
      <p>Total: {props.total}</p>
      <StyledIcon>
        {props.editar}
        {props.apagar}
      </StyledIcon>
    </StyledCard>
  )
}

export default Card

