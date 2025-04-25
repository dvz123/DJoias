import { useParams } from "react-router-dom";
import produtos from "../data/produtos";
import "../styles/DetalhesProduto.css";

function DetalhesProduto() {
  const { id } = useParams();
  const produto = produtos.find((item) => item.id.toString() === id);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <section className="detalhes-container">
      <div className="imagem-container">
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div className="info-container">
        <h2>{produto.nome}</h2>
        <p className="descricao">{produto.descricao}</p>
        <p className="preco">{produto.preco}</p>
        <button className="botao-comprar">Comprar Agora</button>
      </div>
    </section>
  );
}

export default DetalhesProduto;
