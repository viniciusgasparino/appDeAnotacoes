




function Input({label,name,error = null,...rest}){
  return(
    <>
      <label>{label}</label>
      <input 
        type="text" 
        name={name} 
        {...rest}
      />
  </>
  )
}


export default Input