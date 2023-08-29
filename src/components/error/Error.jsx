import styled from "styled-components"

const StyledError = styled.span`
  color: red;
  font-size: 12px;
`


function Error({children}) {
  return(
    <StyledError>{children}</StyledError>
  )
}


export default Error