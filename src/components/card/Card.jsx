import styled from "styled-components"


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 15px;
  height: 200px;
  margin-top: 20px;
  max-width: 200px;
  width: 100%;
 
  background-color:  #c8b8e0;
`

const StyledIcon = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`

const StyledText = styled.span`
  text-align: center;
`


function Card(props){
  return(
    <StyledCard>
      <h2>{props.titulo}</h2>
      <StyledText>{props.text}</StyledText>
      <StyledIcon>
        {props.editar}
        {props.apagar}
      </StyledIcon>
    </StyledCard>
  )
}

export default Card

