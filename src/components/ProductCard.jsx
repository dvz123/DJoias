import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ id, nome, imagem, preco }) {
  return (
    <div className="product-card">
      <Link to={`/produto/${id}`}>
        <img src={imagem} alt={nome} className="product-image" />
        <h3 className="product-title">{nome}</h3>
        <p className="product-price">{preco}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
