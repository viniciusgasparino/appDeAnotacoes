import styled from "styled-components"

const StyledInput = styled.input`
  width: 100%;
  min-width: 300px;
  height: 30px;
  margin-bottom: 20px;
`

const StyledLabel = styled.p`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
`

function Input({label,type,value,error = null,...rest}){
  return(
    <>
      <div>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput 
          type={type} 
          value={value} 
          {...rest}
        />
      </div>
    </>
  )
}


export default Input