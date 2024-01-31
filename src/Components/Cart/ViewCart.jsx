/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartReducer";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const [quantity, setQuantity] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDicount] = useState(100);
  const [shippingFlat, setShippingFlat] = useState(10);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCountChange = (itemId, countChange) => {
    const item = products.find((p) => p.id === itemId);
    const newQuantities = { ...quantity };
    newQuantities[itemId] = Math.max(
      0,
      (newQuantities[itemId] || item.count) + countChange
    );
    setQuantity(newQuantities);
    // Dispatch the addToCart action with the updated count value
    dispatch(addToCart({ id: itemId, count: newQuantities[itemId] }));
  };

  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.priceAfterDiscount * (item.count || 1);
    }, 0);
    setTotalPrice(total);
    setDicount(total > 100 ? 100 : 0);
  }, [products]);

  return (
    <div className="single-cart">
      <div className="container">
        <div className="wrapper">
          <div className="page-title">
            <h1>Shopping Cart</h1>
          </div>
          <div className="products one cart">
            <div className="flexwrap">
              <form action="" className="form-cart">
                <div className="item">
                  <table id="cart-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    {products.length > 0 && (
                      <tbody>
                        {products.map((item, id) => (
                          <tr key={id}>
                            <td
                              className="flexitem"
                              style={{ justifyContent: "normal" }}
                            >
                              <div className="thumbnail object-cover">
                                <Link
                                  to={`/e-commerce-web-app/viewcart/singleproduct/${item.id}`}
                                >
                                  <img
                                    src={item.img}
                                    style={{
                                      width: "120px",
                                      height: "100px",
                                      position: "relative",
                                    }}
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div
                                className="content"
                                style={{ margin: "0px 20px" }}
                              >
                                <strong>
                                  <Link
                                    to={`/e-commerce-web-app/viewcart/singleproduct/${item.id}`}
                                  >
                                    {item.title}
                                  </Link>
                                </strong>
                                <p>Brand: {item.brand}</p>
                              </div>
                            </td>
                            <td>${item.priceAfterDiscount}</td>
                            <td>
                              <div className="qty-control flexitem">
                                <button
                                  className="minus"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleCountChange(item.id, -1);
                                  }}
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={item.count}
                                  defaultValue={1}
                                  readOnly
                                />

                                <button
                                  className="plus"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleCountChange(item.id, 1);
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td>
                              $
                              {(
                                item.priceAfterDiscount * (item.count || 1)
                              ).toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
              </form>
              <div className="cart-summary styled">
                <div className="item">
                  <div className="coupon">
                    <input type="text" placeholder="Enter coupon" />
                    <button>Apply</button>
                  </div>
                  <div className="shipping-rate collapse">
                    <div className="has-child expand">
                      <a href="#" className="icon-small">
                        Estimate Shipping and Tax
                      </a>
                      <div className="content">
                        <div className="countries">
                          <form action="">
                            <label htmlFor="country">Country</label>
                            <select
                              name="country"
                              id="country"
                              defaultValue="1"
                            >
                              <option value="1">Egypt</option>
                              <option value="2">United Kingdom</option>
                              <option value="3">Russia</option>
                              <option value="4">Berlin</option>
                              <option value="5">United State</option>
                              <option value="6">Other</option>
                            </select>
                          </form>
                        </div>
                        <div className="states">
                          <form action="">
                            <label htmlFor="state">State/Province</label>
                            <select name="state" id="state">
                              <option value="">
                                Select a region, state or province
                              </option>
                              <option value="1">Africa & Middle East</option>
                              <option value="2">Alaska</option>
                              <option value="3">American Samoa</option>
                              <option value="4">Arizona</option>
                              <option value="5">Arkansas</option>
                              <option value="6">Others</option>
                            </select>
                          </form>
                        </div>

                        <div className="postal-code">
                          <form action="">
                            <label htmlFor="postal">Zip/Postal Code</label>
                            <input type="number" name="postal" id="postal" />
                          </form>
                        </div>

                        <div className="rate-options variant">
                          <form action="">
                            <p>
                              <span>Flat: $10.00</span>
                              <input
                                type="radio"
                                name="rate-option"
                                id="flat"
                                defaultChecked
                              />
                              <label htmlFor="flat" className="circle"></label>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-total">
                    <table>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>${totalPrice.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th>Discount</th>
                          <td>${discount}</td>
                        </tr>
                        <tr>
                          <th>
                            Shipping <span className="mini-text">(Flat)</span>
                          </th>
                          <td>${shippingFlat}</td>
                        </tr>
                        <tr className="grand-total">
                          <th>TOTAL</th>
                          <td>
                            ${(totalPrice - discount + shippingFlat).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="/checkout" className="secondary-button">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
