import styled from "styled-components"
import Footer from "./componentes/Footer/Footer"
import Header from "./componentes/Header/Header"
import Nav from "./componentes/Nav/Nav"
import Home from "./pagina/Home/Home"
import "./style.css"
import styledGlobal, { ContainerMain, TelaInteira} from "./styledGlobal" 
import React from "react"

function App(){

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return(
    <>
    <styledGlobal/>
    <TelaInteira>

        <Header/>

        <ContainerMain>
            <Nav/>

            <Home reproduz={reproduzVideo}/>
        </ContainerMain>
          <Footer/>
    </TelaInteira>
    </>
  )


}

export default App