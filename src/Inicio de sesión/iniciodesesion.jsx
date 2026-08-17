import { useState } from "react";

export function InicioSesion({ setUsuario }) {
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [password, setPassword] = useState("");
    // Es para guardar los datos del formulario y evitar que se recargue la página
    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombreUsuario === "" || password === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        setUsuario(nombreUsuario);
    };

    return (
        <section>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={nombreUsuario}
                    // CAPTURA LO QUE ESCRIBAMOS EN EL INPUT
                    onChange={(e) => setNombreUsuario(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Iniciar sesión
                </button>
            </form>
        </section>
    );
}

export default InicioSesion;
