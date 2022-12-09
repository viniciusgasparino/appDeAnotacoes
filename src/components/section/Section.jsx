import styled from "styled-components"

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
`

const StyledCenter = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`



function Section(){
  return(
    <StyledSection>
      <StyledCenter>
        funcionando...
      </StyledCenter>
    </StyledSection>
  )
}

export default Section