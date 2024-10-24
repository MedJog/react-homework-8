import ProductCard from "./ProductCard";
import products from "../data/products.json"

const ProductList = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products-cards">
        {products.slice(0,6).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
