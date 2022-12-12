import styled from "styled-components"

const StyledCenter = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content:center;
  gap: 10px;
  padding: 40px 0;
  margin: 0 auto;
`

function Form(props){
  return(
    <StyledCenter>
      <StyledForm>
        {props.children}
      </StyledForm>
    </StyledCenter>
  )
}

export default Form

