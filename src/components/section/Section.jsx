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


function Section(){
  return(
    <>
      <StyledSection>
        <StyledCenter>
          <StyledContainer>
            <StyledCard>
              <h2>Titulo</h2>
              <p>Marca: XXX</p>
              <p>quantidade: XXX</p>
              <p>preço unitario: xxx</p>
              <p>Total: xxx</p>
            </StyledCard>
            <StyledCard>
              <h2>Titulo</h2>
              <p>Marca: XXX</p>
              <p>quantidade: XXX</p>
              <p>preço unitario: xxx</p>
              <p>Total: xxx</p>
            </StyledCard>
          </StyledContainer>
        </StyledCenter>
      </StyledSection>
    </>

  )
}

export default Section