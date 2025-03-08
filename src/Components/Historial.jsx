import { useEffect, useState } from "react";

function Historial({ terminoBusqueda, paisEncontrado }) {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    if (paisEncontrado && !historial.includes(terminoBusqueda)) {
      setHistorial((prev) => {
        const nuevoHistorial = [terminoBusqueda, ...prev].slice(0, 5);
        return nuevoHistorial;
      });
    }
  }, [terminoBusqueda, paisEncontrado]);

  return (
    <div className="w3-margin-top">
      <h2>Historial de Búsquedas:</h2>
      <div className="w3-border w3-padding w3-round w3-white">
        {historial.length > 0 ? (
          <ul className="w3-ul">
            {historial.map((pais, index) => (
              <li key={index}>{pais}</li>
            ))}
          </ul>
        ) : (
          <p className="w3-text-grey">No hay búsquedas recientes.</p>
        )}
      </div>
    </div>
  );
}

export default Historial;
