import Header from "../src/components/header/Header"
import Section from "../src/components/section/Section"
import Footer from "../src/components/footer/Footer"
import Form from "../src/components/form/Form"
import Input from "../src/components/input/Input"
import Button from "../src/components/button/Button"
import Card from "../src/components/card/Card"
import TextArea from "../src/components/textArea/TextArea"
import {FaEdit,FaRegTrashAlt} from "react-icons/fa";
import { useState } from "react"


function Home(){
  const [open,setOpen] = useState(false)
  const [id,setId] = useState(null)
  const [titulo,setTitulo] = useState("")
  const [text,setText] = useState("")
  const [list,setList] = useState([])
 

  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeTitulo = (message) => {
    setTitulo(message)
  }

  const handleChangeText = (message) => {
    setText(message)
  }


  const handleCreateSubmit = (e) => {
    e.preventDefault()
    setList(list.concat({_id: new Date().getMilliseconds().toString(),titulo,text}))
    setTitulo("")
    setText("")
  }

  const handleShowUpdate = (message) => {
    setId(message._id)
    setTitulo(message.titulo)
    setText(message.text)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if(!titulo && !text) return
    setList(list.map(item=>item._id===id ? {titulo,text,_id:id} : item))
    setTitulo("")
    setText("")
    setId(null)
  }

  const handleDelete = (message) => {
    setList(list.filter(item=>item._id !== message))
  }

  
  return(
    <>
      <Header onClick={handleClick}/>

      {
        open && (       
          <form onSubmit={id ? handleUpdate : handleCreateSubmit}>
            <Form>
              <Input
                label="titulo" 
                name="name"
                type="name"
                value={titulo}
                onChange={e=>handleChangeTitulo(e.target.value)}
                maxlength="15"
              />
              <TextArea
                placeholder="Digite aqui a sua anotação"
                label="text" 
                name="name"
                type="name"
                value={text}
                onChange={e=>handleChangeText(e.target.value)}
                maxLength={22}
                rows="4" 
              />
              <Button 
                text={id ? "Atualizar" : "Criar Nota"}
                type="submit"
              /> 
            </Form>   
          </form>   
        )
      }
      <Section>
      { 
        list.map(item =>
          (
            <Card key={item._id}
              titulo={item.titulo}
              text={item.text}
              editar={<FaEdit 
                cursor="pointer"
                onClick={()=>handleShowUpdate(item)}
              />}
              apagar={<FaRegTrashAlt
                cursor="pointer"
                onClick={()=>handleDelete(item._id)}
              />}
            />
          )
        )
      }
      </Section>
      <Footer/>
    </>
  )
}


export default Home