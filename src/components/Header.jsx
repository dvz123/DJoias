import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        DJoias
      </Link>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <Link to="/produtos" className="header-btn">
        Ver Coleção
      </Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
