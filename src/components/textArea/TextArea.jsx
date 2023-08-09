import styled from "styled-components"


const StyledArea = styled.textarea`
  resize: none;
  width: 100%;
  max-width: 200px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
`

function TextArea({...rest}){
  return(
    <>
      <StyledArea {...rest} />
    </>
  )
}

export default TextArea
