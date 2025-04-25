// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Produtos from "./pages/Produtos";
import DetalhesProduto from "./pages/DetalhesProduto";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre"; 
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<DetalhesProduto />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
