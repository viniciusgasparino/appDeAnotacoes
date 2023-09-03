import styled from "styled-components"


const StyledArea = styled.textarea`
  resize: none;
  width: 100%;
  max-width: 300px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

const StyledLabel = styled.p`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: -10px;
`

function TextArea({label,...rest}){
  return(
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledArea {...rest} />
    </>
  )
}

export default TextArea
