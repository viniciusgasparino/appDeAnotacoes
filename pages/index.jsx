import Header from "../src/components/header/Header"
import Section from "../src/components/section/Section"
import Footer from "../src/components/footer/Footer"
import Form from "../src/components/form/Form"
import { useState } from "react"


function Home(){
  const [open,setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return(
    <>
      <Header onClick={handleClick}/>
      {
        open && (
          <Form />
        )
      }
      <Section />
      <Footer/>
    </>
  )
}


export default Home