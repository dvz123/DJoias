import Banner from "../components/Banner";
import produtos from "../data/produtos";
import ColecaoDestaque from "../components/ColecaoDestaque";
import ProductCard from "../components/ProductCard";
import Depoimentos from "../components/Depoimentos";
import "../styles/Home.css";

function Home() {
  const produtosOutono = produtos.filter(produto => produto.colecao === "Outono");

  return (
    <div className="home-container">
      <Banner className="fade-up" />
      <ColecaoDestaque className="fade-up" />
      <Depoimentos className="fade-up" />
      
      <h2 className="home-title fade-up">Coleção de Outono</h2>
      
      <div className="produtos-lista fade-up">
        {produtosOutono.map(({ id, nome, imagem, preco }) => (
          <ProductCard
            key={id}
            id={id}
            nome={nome}
            imagem={imagem}
            preco={preco}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
