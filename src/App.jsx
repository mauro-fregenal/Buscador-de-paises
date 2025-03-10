import { useState } from "react"; // Importamos el hook useState para manejar estados en el componente
import Buscador from "./Components/Buscador"; // Importamos el componente Buscador
import Resultados from "./Components/Resultados"; // Importamos el componente Resultados
import Historial from "./Components/Historial"; // Importamos el componente Historial

function App() {
  // Definimos un estado para almacenar el término de búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  
  // Definimos un estado para saber si se encontró un país en la búsqueda
  const [paisEncontrado, setPaisEncontrado] = useState(false);

  return (
    <div className="w3-container w3-padding-16"> {/* Contenedor principal con estilos de W3.CSS */}
      <div className="w3-card w3-padding w3-round-large w3-light-grey" style={{ maxWidth: "600px", margin: "auto" }}> 
        {/* Tarjeta centrada con un máximo de 600px de ancho */}
        <h1 className="w3-center">Buscador de Países</h1> {/* Título centrado */}
        
        {/* Componente Buscador, al hacer una búsqueda actualiza el estado terminoBusqueda */}
        <Buscador onBuscar={setTerminoBusqueda} />
        
        {/* Componente Resultados, recibe el término de búsqueda y actualiza si el país fue encontrado */}
        <Resultados terminoBusqueda={terminoBusqueda} setPaisEncontrado={setPaisEncontrado} />
        
        {/* Componente Historial, recibe el término de búsqueda y el estado de país encontrado */}
        <Historial terminoBusqueda={terminoBusqueda} paisEncontrado={paisEncontrado} />
      </div>
    </div>
  );
}

export default App; // Exportamos el componente App para que pueda ser utilizado en la aplicación
