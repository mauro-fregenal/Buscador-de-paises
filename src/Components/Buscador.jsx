import { useState } from "react"

function Buscador() {
    const [Busqueda, setBusqueda] = useState("");

    const handChange = (e) =>{
        const nuevoValor = e.target.value;
        setBusqueda(nuevoValor);
        onBuscar(nuevoValor);
    }
return (
    <>
    <h1>Buscado de Países</h1>
    <div>
        <h4>Buscar Pais:</h4>
        <input 
        type="text"
        placeholder="Escribe el nombre de un país"
        value={Busqueda}
        onChange={handChange}
        />
    </div>
    </>
)
}

export default Buscador