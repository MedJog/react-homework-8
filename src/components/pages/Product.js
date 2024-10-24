import Breadcrumb from "../Breadcrumb";
import ProductCard from "../ProductCard";
import products from "../../data/products.json";

const Product = () => {
  return (
    <div>
      <Breadcrumb />
      <section className="product-information">
        <div className="product-photos">
          <div className="product-slider">
            <div className="slider-arrow">
              <i className="icon-gray fa-solid fa-angle-left fa-2xl"></i>
            </div>
            <div className="product-photo">
              <img src="product_photos/product_photo.png" alt="photo" />
            </div>
            <div className="slider-arrow">
              <i className="icon-gray fa-solid fa-angle-right fa-2xl"></i>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-describtion">
            <h3 className="product-category">WOMEN COLLECTION</h3>
            <div className="pink-block"></div>
            <h2 className="product-brand">MOSCHINO CHEAP AND CHIC</h2>
            <p className="product-text">
              Compellingly actualize fully researched processes before proactive
              outsourcing. Progressively syndicate collaborative architectures
              before cutting-edge services. Completely visualize parallel core
              competencies rather than exceptional portals.
            </p>
            <p className="product-price">$561</p>
            <div className="gray-block"></div>
            <form className="product-form">
              <select className="product-select" name="color" id="color">
                <option value="">CHOOSE COLOR</option>
              </select>
              <select className="product-select" name="size" id="size">
                <option value="size">CHOOSE SIZER</option>
              </select>
              <select className="product-select" name="quantity" id="quantity">
                <option value="">QUANTITY</option>
              </select>
            </form>
          </div>
        </div>
      </section>
      <section className="additionally">
        <div className="container">
          <div className="more-products">
            {products.slice(3, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Product;
