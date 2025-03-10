import { useState } from "react"; // Importamos el hook useState para manejar el estado del input

function Buscador({ onBuscar }) { // Recibimos la función onBuscar como prop
    const [busqueda, setBusqueda] = useState(""); // Estado local para almacenar el valor del input

    const manejarCambio = (e) => {
        setBusqueda(e.target.value); // Actualizamos el estado con el valor del input
        onBuscar(e.target.value); // Llamamos a la función onBuscar para actualizar el estado en App
    };

    return (
        <div className="w3-margin-top"> {/* Margen superior para separar el buscador del resto */}
            <h4>Buscar País:</h4> {/* Etiqueta para el campo de búsqueda */}
            <input
                type="text"
                className="w3-input w3-border w3-round" // Estilos de W3.CSS para mejorar la apariencia
                placeholder="Escribe el nombre de un país..." // Texto de ayuda dentro del input
                value={busqueda} // El valor del input está controlado por el estado
                onChange={manejarCambio} // Llamamos a manejarCambio cuando el usuario escribe
            />
        </div>
    );
}

export default Buscador; // Exportamos el componente para su uso en App
