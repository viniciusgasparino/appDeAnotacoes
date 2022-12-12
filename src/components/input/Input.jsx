




function Input({label,type,value,error = null,...rest}){
  return(
    <>
      <div>
        <p>{label}</p>
        <input 
          type={type} 
          value={value} 
          {...rest}
        />
      </div>
    </>
  )
}


export default Input