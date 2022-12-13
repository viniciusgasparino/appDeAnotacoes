import Header from "../src/components/header/Header"
import Section from "../src/components/section/Section"
import Footer from "../src/components/footer/Footer"
import Form from "../src/components/form/Form"
import Input from "../src/components/input/Input"
import Button from "../src/components/button/Button"
import Card from "../src/components/card/Card"
import { useState } from "react"


function Home(){
  const [open,setOpen] = useState(false)
  const [produto,setProduto] = useState("")
  const [marca,setMarca] = useState("")
  const [preco,setPreco] = useState(0)
  const [qtd,setQtd] = useState(0)
  const [total,setTotal] = useState(0)
  const [list,setList] = useState([])


  const handleClick = () => {
    setOpen(!open)
  }

  const handleChangeProduto = (text) => {
    setProduto(text)
  }

  const handleChangeMarca = (text) => {
    setMarca(text)
  }

  const handleChangePreco = (text) => {
    setPreco(text)
  }

  const handleChangeQtd = (text) => {
    setQtd(text)
  }

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    setList([produto,marca,preco,qtd])
  }

  return(
    <>
      <Header onClick={handleClick}/>
      {
        open && (
          <form onSubmit={handleCreateSubmit}>
            <Form>
              <Input
                label="produto" 
                name="name"
                type="name"
                value={produto}
                onChange={e=>handleChangeProduto(e.target.value)}
              />
              <Input
                label="Marca" 
                name="marca"
                type="name"
                value={marca}
                onChange={e=>handleChangeMarca(e.target.value)}
              />
              <Input
                label="Preço" 
                name="preço"
                type="number"
                value={preco}
                onChange={e=>handleChangePreco(e.target.value)}
                min="0"
                max="1000"
              />
              <Input
                label="quantidade" 
                name="quantidade"
                type="number"
                value={qtd}
                onChange={e=>handleChangeQtd(e.target.value)}
                min="0"
                max="20"
              />
              <Button 
                text="Enviar"
                type="submit"
              /> 
            </Form>   
          </form>   
        )
      }
      <Section>
      {
        list.map((item,pos)=>{
          return(
            <Card key={pos}
              titulo={item.produto}
              marca={item.marca}
              quantidade={item.qtd}
              preco={item.preco}
              total={item.total} 
            />
          )
        })
      }
      </Section>
      <Footer/>
    </>
  )
}


export default Home