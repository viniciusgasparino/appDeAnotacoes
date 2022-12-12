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
  background-color: #eae7e7cb;
`



function Card({titulo,marca,quantidade,preco,total}){
  return(
    <StyledCard>
      <h2>{titulo}</h2>
      <p>{marca}</p>
      <p>{quantidade}</p>
      <p>{preco}</p>
      <p>{total}</p>
    </StyledCard>
  )
}

export default Card

