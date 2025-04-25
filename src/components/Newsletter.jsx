import "../styles/Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Receba novidades exclusivas</h2>
      <p>Cadastre seu email e fique por dentro dos lançamentos e promoções</p>
      <form className="form-newsletter">
        <input type="email" placeholder="Digite seu email" />
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}

export default Newsletter;
