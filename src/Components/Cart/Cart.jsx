/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart, resetCart } from "../../Redux/CartReducer";
import { BiReset } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const [cartList, setCartList] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const showCart = () => {
    cartList ? setCartList(false) : setCartList(true);
  };

  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  useEffect(() => {
    const total = products.reduce(
      (acc, product) => acc + product.priceAfterDiscount * (product.count || 1),
      0
    );
    setTotalPrice(total);
  }, [products]);

  // HAndle click outside the cart nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartList && e.target.closest(".cart") === null) {
        setCartList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [cartList]);

  const handlePageClickWithScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDouble = () => {
    setCartList(false);
    handlePageClickWithScroll();
  };

  return (
    <div className="cart">
      <div className="cart-icon" onClick={products.length > 0 && showCart}>
        <LuShoppingCart />
      </div>
      <div className="fly-item">
        <span className="item-number">{products.length}</span>
      </div>

      {cartList && products.length > 0 ? (
        <ul className="cart-list">
          {products.map((product, id) => (
            <li key={id} className="cart-item">
              <span className="one">
                <Link
                  to={`/e-commerce-web-app/singleproduct/${product.id}`}
                  onClick={() => {
                    showCart();
                    handlePageClickWithScroll();
                  }}
                >
                  <img src={product.img}></img>
                  <span className="cart-item-title">{product.title}</span>
                </Link>
              </span>

              <span className="two">
                <span className="product-numbers">
                  X<span>{product.count > 0 ? `${product.count}` : 1}</span>
                </span>
                <span className="cart-item-price">
                  $
                  {(
                    (parseFloat(product.count) || 1) *
                    (parseFloat(product.priceAfterDiscount) || 0)
                  ).toFixed(2)}
                </span>
                <span
                  className="cart-item-remove"
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        id: product.id,
                      })
                    )
                  }
                >
                  <FaTrash />
                </span>
              </span>
            </li>
          ))}
          <span className="cart-reset" onClick={() => dispatch(resetCart())}>
            <BiReset />
          </span>
          <div className="cart-footer">
            <div className="subtotal">
              <p>Total</p>
              <h4>${totalPrice.toFixed(1)}</h4>
            </div>
            <div className="actions">
              <Link
                to="/e-commerce-web-app/checkout"
                className="primary-button"
                onClick={handleDouble}
              >
                Checkout
              </Link>
              <Link
                to="/e-commerce-web-app/viewcart"
                className="secondary-button"
                onClick={handleDouble}
              >
                View Cart
              </Link>
            </div>
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
