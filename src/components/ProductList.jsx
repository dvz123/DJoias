import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const produtos = [
  {
    id: 1,
    nome: "Anel de Esmeralda",
    preco: "R$ 1.200,00",
    imagem: "/assets/img/anel-esmeralda.jpg",
  },
  {
    id: 2,
    nome: "Brinco de Diamante",
    preco: "R$ 3.500,00",
    imagem: "/assets/img/brinco-diamante.jpg",
  },
  {
    id: 3,
    nome: "Colar de Rubi",
    preco: "R$ 2.800,00",
    imagem: "/assets/img/colar-rubi.jpg",
  },
];

function ProductList() {
  return (
    <div className="product-list">
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default ProductList;
