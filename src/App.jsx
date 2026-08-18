import { useState } from "react";
import { InicioSesion } from "./Inicio de sesión/iniciodesesion";
import { PaginaInicial } from "./Pagina inicial/paginainicial";

function App() {
    const [usuario, setUsuario] = useState("");

    return (
        <div>
            {/* Esto es para que si usuario tiene un valor muestra la pagina inicial */}
            {usuario.length > 0
                ? <PaginaInicial usuario={usuario} />
                : <InicioSesion setUsuario={setUsuario} />
            }
        </div>
    );
}

export default App;
