import "../styles/Contato.css";

function Contato() {
  return (
    <section className="contato-container">
      <h2 className="contato-titulo">Fale Conosco</h2>
      <p className="contato-descricao">
        Entre em contato para dúvidas, pedidos personalizados ou sugestões.
      </p>
      <form className="formulario-contato">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contato;
