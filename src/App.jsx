import { useState } from "react"
import Buscador from "./Components/Buscador"

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  
  return (
    <div>
      <Buscador onBusar={setTerminoBusqueda}/>
      <p>Busqueda actual: {terminoBusqueda}</p>
    </div>
  )
}

export default App
