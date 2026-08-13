import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registro from "./Registro/Registro";  

function App() {
return (
    <BrowserRouter>
        <nav>
            <Link to="/">Inicio</Link> |
        </nav>
        <Routes>
            <Route path="/registro" element={<Registro />} />
        </Routes>
    </BrowserRouter>
);
}
export default App;