/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);

  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDicount] = useState(100);
  const [shippingFlat, setShippingFlat] = useState(10);

  useEffect(() => {
    const total = products.reduce(
      (acc, product) => acc + product.priceAfterDiscount,
      0
    );
    setTotalPrice(total);
  }, [products]);

  const handlePageClickWithScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="single-checkout">
      <div className="container">
        <div className="wrapper">
          <div className="checkout flexwrap">
            <div className="item left styled">
              <h1>Shipping Address</h1>
              <form action="">
                <p>
                  <label htmlFor="email">
                    Email Address<span></span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="fname">
                    First Name<span></span>
                  </label>
                  <input type="text" id="fname" required />
                </p>
                <p>
                  <label htmlFor="lname">
                    Last Name<span></span>
                  </label>
                  <input type="text" id="lname" required />
                </p>

                <p>
                  <label htmlFor="address">
                    Street Address<span></span>
                  </label>
                  <input type="text" id="address" required />
                </p>
                <p>
                  <label htmlFor="city">
                    City<span></span>
                  </label>
                  <input type="text" id="city" required />
                </p>

                <p>
                  <label htmlFor="postal">
                    Zip / Postal Code<span></span>
                  </label>
                  <input type="number" id="postal" required />
                </p>

                <p>
                  <label htmlFor="country">Country</label>
                  <select name="country" id="country" defaultValue="1">
                    <option value="1">Egypt</option>
                    <option value="2">United Kingdom</option>
                    <option value="3"> Russia</option>
                    <option value="4">Berlin</option>
                    <option value="5">United State</option>
                    <option value="6">Other</option>
                  </select>
                </p>

                <p>
                  <label htmlFor="phone">
                    Phone Number<span></span>
                  </label>
                  <input type="number" id="phone" required />
                </p>

                <p>
                  <label htmlFor="area">Other Notes (Optional)</label>
                  <textarea id="area" cols="30" rows="10"></textarea>
                </p>
              </form>

              <div className="shipping-methods">
                <h2>Shipping Methods</h2>
                <p className="checkset">
                  <input type="radio" defaultChecked />
                  <label>$10.00 Flate Rate</label>
                </p>
              </div>
              <div className="primary-checkout">
                <Link
                  to="/e-commerce-web-app/"
                  className="primary-button"
                  onClick={handlePageClickWithScroll}
                >
                  Place Order
                </Link>
              </div>
            </div>
            <div className="item right">
              <h2>Order Summary</h2>
              <div className="summary-order is_sticky">
                <div className="summary-totals">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </li>
                    <li>
                      <span>Discount</span>
                      <span>${discount}</span>
                    </li>
                    <li>
                      <span>Shipping: Flat</span>
                      <span>${shippingFlat}</span>
                    </li>
                    <li>
                      <span>Total</span>
                      <strong>
                        ${(totalPrice - discount + shippingFlat).toFixed(2)}
                      </strong>
                    </li>
                  </ul>
                </div>
                {products.length > 0 && (
                  <ul className="products mini">
                    {products.map((item, id) => (
                      <li className="item" key={id}>
                        <div className="thumbnail object-cover">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="item-content">
                          <p>{item.title}</p>
                          <span className="price">
                            <span className="current">
                              ${item.priceAfterDiscount}
                            </span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
