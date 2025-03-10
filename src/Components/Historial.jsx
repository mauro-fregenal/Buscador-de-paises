import { useEffect, useState } from "react"; // Importamos los hooks useEffect y useState de React

function Historial({ terminoBusqueda, paisEncontrado }) { // Componente Historial que recibe las props terminoBusqueda y paisEncontrado
  const [historial, setHistorial] = useState([]); // Estado para almacenar el historial de búsquedas

  useEffect(() => {
    // Verificamos si el país fue encontrado y si no está ya en el historial
    if (paisEncontrado && terminoBusqueda && !historial.includes(terminoBusqueda)) {
      setHistorial((prev) => {
        const nuevoHistorial = [terminoBusqueda, ...prev].slice(0, 5); // Agrega el nuevo término y mantiene un máximo de 5 elementos
        return nuevoHistorial;
      });
    }
  }, [terminoBusqueda, paisEncontrado]); // Se ejecuta cuando cambia terminoBusqueda o paisEncontrado

  return (
    <div className="w3-margin-top"> {/* Contenedor con margen superior para mejorar la disposición visual */}
      <h2>Historial de Búsquedas:</h2> {/* Título de la sección */}
      <div className="w3-border w3-padding w3-round w3-white"> {/* Contenedor estilizado con W3.CSS */}
        {historial.length > 0 ? ( // Si hay elementos en el historial, los mostramos en una lista
          <ul className="w3-ul"> {/* Lista con estilo W3.CSS */}
            {historial.map((pais, index) => (
              <li key={index}>{pais}</li> // Mostramos cada país buscado en la lista
            ))}
          </ul>
        ) : (
          <p className="w3-text-grey">No hay búsquedas recientes.</p> // Mensaje de aviso si el historial está vacío
        )}
      </div>
    </div>
  );
}

export default Historial; // Exportamos el componente para poder usarlo en App.jsx u otros archivos
