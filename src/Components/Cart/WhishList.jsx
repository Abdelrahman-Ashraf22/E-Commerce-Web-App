/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { SiMastercard, SiVisa } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useParams } from "react-router-dom";
import { addToCart, addToFav, removeFromFav } from "../../Redux/CartReducer";
import productData from "../../products.json";
import { LuHeart } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";

const WishList = () => {
  const [popup, setPopup] = useState(false);
  const { id } = useParams();

  const product = productData.find((p) => p.id === parseInt(id));

  const favItems = useSelector((state) => state.cart.fav);
  useEffect(() => {
    const savedIds = localStorage.getItem("selectedIds");
    if (savedIds > 0) {
      const savedItems = JSON.parse(savedIds);
      favItems.push(...savedItems);
    }
  }, []);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const savedIds = localStorage.getItem("selectedIds");
    if (savedIds) {
      setSelectedIds(JSON.parse(savedIds));
    }
  }, []);

  // Fav
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleFavorite = (id) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((itemId) => itemId !== id)
      : [...selectedIds, id];

    setSelectedIds(newSelectedIds);
    localStorage.setItem("selectedIds", JSON.stringify(newSelectedIds));

    newSelectedIds.includes(id)
      ? dispatch(
          addToFav({
            id: product.id,
            title: product.title,
            img: product.thumbnail,
            price: product.price,
            discountPercentage: product.discountPercentage,
            priceAfterDiscount: product.priceAfterDiscount,
            rating: product.rating,
            brand: product.brand,
          })
        )
      : dispatch(
          removeFromFav({
            id: id,
          })
        );
  };

  return (
    <div className="features" id="features">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="sectop flexitem">
              <h2>
                <span className="circle"></span>
                <span>Whishlist</span>
              </h2>
            </div>
            <div className="products main flexwrap">
              {favItems.map((item) => (
                <div className="item" key={item.id}>
                  <div className="media" style={{ height: "300px" }}>
                    <div className="thumbnail object-cover">
                      <Link to={`/e-commerce-web-app/wishlist/${item.id}`}>
                        <img src={item.img} alt="photo" />
                      </Link>
                    </div>

                    <div className="hoverable">
                      <ul>
                        <li className="active">
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                addToFav({
                                  id: item.id,
                                  title: item.title,
                                  img: item.thumbnail,
                                  price: item.price,
                                  discountPercentage: item.discountPercentage,
                                  priceAfterDiscount: item.priceAfterDiscount,
                                  rating: item.rating,
                                  brand: item.brand,
                                })
                              );
                              toggleFavorite(item.id);
                            }}
                            style={
                              selectedIds
                                ? selectedIds.includes(item.id)
                                  ? {
                                      backgroundColor: "#ff6b6b",
                                      opacity: "1",
                                      color: "white",
                                    }
                                  : {}
                                : {}
                            }
                          >
                            <LuHeart />
                          </Link>
                        </li>
                        <li
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: item.id,
                                title: item.title,
                                img: item.img,
                                price: item.price,
                                brand: item.brand,
                              })
                            )
                          }
                        >
                          <Link to="#">
                            <MdAddShoppingCart />
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="discount circle flexcenter">
                      <span>{item.discountPercentage}%</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="rating">
                      <div className="stars"></div>
                      <span className="mini-text">({item.rating})</span>
                    </div>
                    <h3 className="main-links">
                      <Link to={`/e-commerce-web-app/wishlist/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <span className="brand">
                      <p>Brand: {item.brand}</p>
                    </span>
                    <div className="price">
                      <span className="current">
                        ${item.priceAfterDiscount}
                      </span>
                      <span className="normal mini-text">${item.price}</span>
                    </div>
                    <Link className="primary-button" onClick={handlePopup}>
                      Order Now!
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {popup && (
              <div className="popup">
                <div className="popup-inner">
                  <Form>
                    <span className="close" onClick={handlePopup}>
                      X
                    </span>
                    <h2>Pay with Card!</h2>
                    <p>
                      <span>
                        <CiCreditCard1 />
                      </span>
                      Card
                    </p>
                    <label htmlFor="number">Card Number</label>
                    <input
                      id="number"
                      type="number"
                      placeholder="1234-5678-9012-3456"
                      required
                    ></input>
                    <span className="icons">
                      <SiVisa />|
                      <SiMastercard />
                    </span>
                    <label htmlFor="date">Expiry date</label>
                    <input
                      id="date"
                      type="text"
                      placeholder="MM/YY"
                      required
                    ></input>
                    <label htmlFor="digits">CVC/CVV</label>
                    <input
                      id="digits"
                      type="number"
                      placeholder="3 digits"
                      required
                    ></input>

                    <label htmlFor="name">Name on Card</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      required
                    ></input>

                    <button
                      className="primary-button"
                      style={{ border: "none", cursor: "pointer" }}
                      onClick={handlePopup}
                    >
                      Confirm
                    </button>
                  </Form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
