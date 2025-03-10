import { useEffect, useState } from "react"; // Importamos los hooks useEffect y useState

function Resultados({ terminoBusqueda, setPaisEncontrado }) { // Recibimos el término de búsqueda y la función para actualizar si se encontró un país
  const [pais, setPais] = useState(null); // Estado para almacenar la información del país encontrado
  const [error, setError] = useState(""); // Estado para almacenar errores en la búsqueda

  useEffect(() => {
    if (!terminoBusqueda) return; // Si no hay término de búsqueda, no hacemos la petición

    const obtenerPais = async () => {
      try {
        // Hacemos la petición a la API con el nombre del país buscado
        const respuesta = await fetch(`https://restcountries.com/v3.1/name/${terminoBusqueda}`);
        if (!respuesta.ok) throw new Error("País no encontrado"); // Si la respuesta no es correcta, lanzamos un error

        const datos = await respuesta.json(); // Convertimos la respuesta en JSON
        setPais(datos[0]); // Guardamos el primer país de la respuesta en el estado
        setError(""); // Limpiamos cualquier error anterior
        setPaisEncontrado(true); // Indicamos que se encontró un país
      } catch (error) {
        setPais(null); // Limpiamos el estado del país si hay error
        setError("No hay resultados para mostrar."); // Mostramos el mensaje de error
        setPaisEncontrado(false); // Indicamos que no se encontró el país
      }
    };

    obtenerPais(); // Llamamos a la función de obtención de país
  }, [terminoBusqueda]); // Se ejecuta cada vez que cambia el término de búsqueda

  return (
    <div className="w3-margin-top"> {/* Margen superior para separar los resultados */}
      <h2>Resultados:</h2>
      <div className="w3-border w3-padding w3-round w3-white"> {/* Contenedor estilizado con W3.CSS */}
        {error ? (
          <p className="w3-text-grey">{error}</p> // Mostramos mensaje de error si existe
        ) : pais ? (
          <div>
            <h3>{pais.name.common}</h3> {/* Nombre común del país */}
            <p><strong>Capital:</strong> {pais.capital ? pais.capital[0] : "No tiene"}</p> {/* Mostramos la capital o indicamos que no tiene */}
            <p><strong>Población:</strong> {pais.population.toLocaleString()}</p> {/* Mostramos la población con formato de miles */}
            <img src={pais.flags.png} alt={`Bandera de ${pais.name.common}`} width="100" /> {/* Mostramos la bandera del país */}
          </div>
        ) : (
          <p className="w3-text-grey">No hay resultados para mostrar.</p> // Mensaje por defecto si no hay datos
        )}
      </div>
    </div>
  );
}

export default Resultados; // Exportamos el componente para su uso en App
