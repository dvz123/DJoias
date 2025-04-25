import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">DJoias</h3>
        <p>Joias elegantes e exclusivas para todos os momentos especiais.</p>
        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">WhatsApp</a>
        </div>
        <p className="footer-copy">&copy; 2025 DJoias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
