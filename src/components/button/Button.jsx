import styled from "styled-components"

const StyledButton = styled.button`
  border: none;
  width: 130px;
  padding: 20px;
  cursor: pointer;
  background-color: #cc11dd;
  color: white;
  font-size: 18px;
  border-Radius: 10px;

  :hover{
    background-color: #9d04ab;
    transition: 0.5s; 
  }
  
`


function Button({text,onClick,...rest}){
  return(
   <>
    <StyledButton onClick={onClick} {...rest}>
      {text}
    </StyledButton>
   </> 
    
  )
}

export default Button