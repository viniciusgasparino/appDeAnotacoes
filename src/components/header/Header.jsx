import styled from "styled-components"
import {FaBook} from "react-icons/fa"
import Button from "../button/Button"

const StyledHeader = styled.section`
  height: 90px;
  display: flex;
  padding: 0 100px;
  gap: 20px;
  background-color: #c8b8e0;
  color: white;

  @media (max-width: 700px){
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    align-items: center;
  }
`

const StyledLogo = styled.div`
  display: flex;
  flex: 1;
  align-items:center;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

function Header({onClick,text}){      
  return(
    <StyledHeader>
      <StyledLogo>
        <FaBook size="80px"/>
      </StyledLogo>
      <StyledDiv>
        <Button
          text={text}
          onClick={onClick}
        />
      </StyledDiv>
    </StyledHeader>
  )
}


export default Header