import * as React from "react"
import Navbar from "../util/componets/navbar"
import Header from "../util/componets/header"
import Equipo from "../util/componets/equipos"
import Rutinas from "../util/componets/rutinas"
import Coach from "../util/componets/coach"
import Galery from "../util/componets/galery"
//import "../util/bootstrap/scss/bootstrap.scss"

// markup
const IndexPage = () => {
  return (
    <main >
      <Header/>
      <Navbar/>
      <Equipo/>
      <Rutinas/>
      <Coach/>
      <Galery/>
    </main>
  )
}

export default IndexPage
