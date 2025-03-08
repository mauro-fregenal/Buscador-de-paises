import { useState } from "react"
import Buscador from "./Components/Buscador"
import Resultados from "./Components/Resultados";
import Historial from "./Components/Historial";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [paisEncontrado, setPaisEncontrado] = useState(false);

  return (
    <div className="w3-container w3-padding-16">
      <div className="w3-card w3-padding w3-round-large w3-light-grey" style={{ maxWidth: "600px", margin: "auto" }}>
        <h1 className="w3-center">Buscador de Países</h1>
        <Buscador onBuscar={setTerminoBusqueda} />
        <Resultados terminoBusqueda={terminoBusqueda} setPaisEncontrado={setPaisEncontrado} />
        <Historial terminoBusqueda={terminoBusqueda} paisEncontrado={paisEncontrado} />
      </div>
    </div>
  );
}

export default App
