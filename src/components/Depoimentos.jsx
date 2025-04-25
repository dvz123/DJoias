import "../styles/Depoimentos.css";

function Depoimentos() {
  return (
    <section className="depoimentos">
      <h2>O que nossos clientes dizem</h2>
      <div className="depoimentos-container">
        <div className="depoimento">
          <p className="depoimento-text">
            "As joias da DJoias são simplesmente deslumbrantes! Atendimento
            impecável e qualidade excepcional. Super recomendo!"
          </p>
          <div className="depoimento-info">
            <p className="depoimento-name">Ana Souza</p>
            <p className="depoimento-role">Cliente satisfeita</p>
          </div>
        </div>
        <div className="depoimento">
          <p className="depoimento-text">
            "Fiquei encantada com a variedade e o design das peças. Comprei
            um anel e não quero mais tirar!"
          </p>
          <div className="depoimento-info">
            <p className="depoimento-name">Carlos Silva</p>
            <p className="depoimento-role">Cliente fiel</p>
          </div>
        </div>
        <div className="depoimento">
          <p className="depoimento-text">
            "Adorei o meu colar de diamantes! O atendimento foi de primeira,
            e a entrega super rápida. Certamente voltarei a comprar!"
          </p>
          <div className="depoimento-info">
            <p className="depoimento-name">Juliana Almeida</p>
            <p className="depoimento-role">Cliente VIP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
