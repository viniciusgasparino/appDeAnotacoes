import styled from "styled-components"


const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
`

const StyledCenter = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 800px;
  padding: 20px 0;
  margin-top: 30px;

  @media (max-width:700px){
    flex-direction: column;
    align-items:center;
    gap: 20px;
    margin-bottom: 30px;
  }
 ` 


function Section(props){
  return(
    <>
      <StyledSection>
        <StyledCenter>
          <StyledContainer>
            {props.children}
          </StyledContainer>
        </StyledCenter>
      </StyledSection>
    </>

  )
}

export default Section