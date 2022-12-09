import styled from "styled-components"
import {FaShoppingCart} from "react-icons/fa";

const StyledHeader = styled.section`
  height: 90px;
  display: flex;
  padding: 0 100px;
  gap: 20px;
  background-color: #c8b8e0;
  color: white;
`

const StyledLogo = styled.div`
  display: flex;
  flex: 1;
  align-items:center;

  @media (max-width: 700px){
    margin-bottom: 30px;
    margin-left: 0px;
  }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 700px){
    display: none;
  }
`

function Header(){
  return(
    <StyledHeader>
      <StyledLogo>
        <FaShoppingCart />
      </StyledLogo>
      <StyledDiv>
        <button>cadastrar</button>
      </StyledDiv>
    </StyledHeader>
  )
}


export default Header