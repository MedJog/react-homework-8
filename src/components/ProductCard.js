import { Link } from "react-router-dom"; 
import Product from "./pages/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/actions";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="product-card">
          <Link to="/product" element={<Product />} className="product-card__link" >
            <img className="product-card__img" src={product.img} alt="photo product" />
            <div className="product-card__info">
              <h3 className="product-card__heading">{product.name}</h3>
              <p className="product-card__describtion">{product.desc}</p>
              <p className="product-card__price">{product.price}</p>
            </div>
          </Link>
            <div className="product-card__add-basket">
              <button className="product-card__add-button" onClick={() => dispatch(addToCart(product))}><i className="product-card__icon fa-solid fa-cart-plus fa-xl"></i>Add to cart</button>
            </div>
        </div>
  );
};

export default ProductCard;