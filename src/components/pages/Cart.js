
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // console.log(cart);

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <section className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-items">
            <div className="breadcrumb-item">
              <h2 className="breadcrumb-item-title">SHOPPING CART</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="shopping-cart">
        <div className="container">
          <div className="shopping-cart-items">
            <div className="shopping-cart-left">
              <div className="shopping-cart-products">
                {cart.length === 0 ? (
                  <h2 className="breadcrumb-item-title">Your cart is empty</h2>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="product-card_cart">
                      <div className="product-card__link product-card__link_cart">
                        <img
                          className="product-card__img product-card__img_cart"
                          src={item.img} 
                          alt="photo product"
                        />
                        <div className="product-card__info">
                          <h3 className="product-card__heading_cart">{item.name}</h3>
                          <p className="product-card__properties">
                            Price: <span className="product-card__price">$ {item.price}</span>
                          </p>
                          <p className="product-card__properties">
                            Color: <span>{item.color}</span> 
                          </p>
                          <p className="product-card__properties">
                            Size: <span>{item.size}</span> 
                          </p>
                          <p className="product-card__properties">
                            Quantity: <span>{item.quantity}</span>
                          </p>
                        </div>
                        <button className="product-card-close" onClick={() => dispatch(removeFromCart(item.id))}>
                          <i className="product-cart__icon-close fa-solid fa-xmark fa-xl"></i>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="shopping-cart-buttons">
                <button className="button button_cart-hover button_color-white button_text-gray button_text-size-2 button-browse_paddings button_border-gray">
                  CLEAR SHOPPING CART
                </button>
                <button className="button button_cart-hover button_color-white button_text-gray button_text-size-2 button-browse_paddings button_border-gray">
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
            <div className="shopping-cart-right">
              <form className="shopping-cart-form" method="post" action="#">
                <h3 className="shopping-cart-form-title">SHIPPING ADDRESS</h3>
                <input className="shopping-cart-input" type="text" placeholder="Bangladesh" />
                <input className="shopping-cart-input" type="text" placeholder="State" />
                <input className="shopping-cart-input" type="text" placeholder="Postcode / Zip" />
                <input className="button button-cart button_text-gray button_color-white button_border-gray button_form_paddings button_cart-hover" type="submit" value="GET A QUOTE" />
              </form>
              <div className="shopping-cart-payment">
                <p className="payment-subtotal">
                  SUB TOTAL
                  <span className="color-pink shopping-cart-sum">$ {getTotalAmount()}</span>
                </p>
                <p className="payment-grandtotal">
                  GRAND TOTAL<span className="shopping-cart-sum">$ {getTotalAmount()}</span>
                </p>
                <div className="block-gray"></div>
                <button className="button button_text-white button_color-pink button_text-size-1 button_border-none button-browse_paddings button_cart-hover">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
