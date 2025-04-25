import produtos from "../data/produtos";
import ProductCard from "../components/ProductCard";
import "../styles/Produtos.css";

function Produtos() {
  return (
    <section className="produtos-page">
      <h2 className="produtos-titulo">Coleção de Joias</h2>
      <div className="produtos-grid">
        {produtos.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Produtos;
