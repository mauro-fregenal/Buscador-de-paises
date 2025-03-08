import { useEffect, useState } from "react";

function Resultados({ terminoBusqueda, setPaisEncontrado }) {
  const [pais, setPais] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!terminoBusqueda) return;

    const obtenerPais = async () => {
      try {
        const respuesta = await fetch(`https://restcountries.com/v3.1/name/${terminoBusqueda}`);
        if (!respuesta.ok) throw new Error("País no encontrado");

        const datos = await respuesta.json();
        setPais(datos[0]);
        setError("");
        setPaisEncontrado(true);
      } catch (error) {
        setPais(null);
        setError("No hay resultados para mostrar.");
        setPaisEncontrado(false);
      }
    };

    obtenerPais();
  }, [terminoBusqueda]);

  return (
    <div className="w3-margin-top">
      <h2>Resultados:</h2>
      <div className="w3-border w3-padding w3-round w3-white">
        {error ? (
          <p className="w3-text-grey">{error}</p>
        ) : pais ? (
          <div>
            <h3>{pais.name.common}</h3>
            <p><strong>Capital:</strong> {pais.capital ? pais.capital[0] : "No tiene"}</p>
            <p><strong>Población:</strong> {pais.population.toLocaleString()}</p>
            <img src={pais.flags.png} alt={`Bandera de ${pais.name.common}`} width="100" />
          </div>
        ) : (
          <p className="w3-text-grey">No hay resultados para mostrar.</p>
        )}
      </div>
    </div>
  );
}

export default Resultados;
