import "../styles/ColecaoDestaque.css";

import colecaoEsmeralda from "../assets/img/colecao-esmeralda.jpeg";

function ColecaoDestaque() {
  return (
    <section className="colecao-destaque">
      <h2>Coleção Esmeralda</h2>
      <p>
        Uma linha exclusiva com pedras naturais, design refinado e acabamento premium. Inspirada na beleza da natureza.
      </p>
      <img src={colecaoEsmeralda} alt="Coleção de Esmeralda" />
    </section>
  );
}

export default ColecaoDestaque;
