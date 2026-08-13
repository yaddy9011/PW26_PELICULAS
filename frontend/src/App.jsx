import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Agregar from "./pages/Agregar";
import Editar from "./pages/Editar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/agregar" element={<Agregar />} />
                <Route path="/editar/:id" element={<Editar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;