import styled from "styled-components"

const StyledCenter = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content:center;
  gap: 10px;
  padding: 40px 0;
  margin: 0 auto;
`

function Form(){
  return(
    <StyledCenter>
      <StyledForm>
        <div>
          <p>Insira o produto</p>
          <input type="text" name="produto" />
        </div>
        <div>
          <p>insira a marca</p>
          <input type="text" name="marca" />
        </div>
        <div>
          <button>Enviar</button>
        </div>
      </StyledForm>
    </StyledCenter>
  )
}

export default Form

