import { useState } from "react"

function Buscador({onBuscar}) {
    const [busqueda, setBusqueda] = useState("");

  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
    onBuscar(e.target.value);
  };

  return (
    <div className="w3-margin-top">
      <h4>Buscar País:</h4>
      <input
        type="text"
        className="w3-input w3-border w3-round"
        placeholder="Escribe el nombre de un país..."
        value={busqueda}
        onChange={manejarCambio}
      />
    </div>
  );
}

export default Buscador