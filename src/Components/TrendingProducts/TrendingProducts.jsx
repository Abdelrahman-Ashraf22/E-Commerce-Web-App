/* eslint-disable react/prop-types */
import Timer from "./Timer";
import Data from "../../products.json";
import { LuHeart } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart, addToFav } from "../../Redux/CartReducer";
import { Link } from "react-router-dom";

const TrendingProducts = ({ toggleFavorite, selectedIds, dispatch }) => {
  const handlePageClickWithScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="wrapper">
          <div className="sectop flexitem">
            <h2>
              <span className="circle"></span>
              <span>Trending Products</span>
            </h2>
          </div>

          <div className="column">
            <div className="flexwrap">
              <div className="row products big">
                {Data.slice(86, 87).map((item, id) => (
                  <div className="item" key={id}>
                    <Timer />
                    <div className="media">
                      <div className="image">
                        <Link
                          to={`/e-commerce-web-app/singleproduct/${item.id}`}
                          onClick={handlePageClickWithScroll}
                        >
                          <img src={item.thumbnail} alt="photo" />
                        </Link>
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
                      <h3
                        className="main-links"
                        onClick={handlePageClickWithScroll}
                      >
                        <Link
                          to={`/e-commerce-web-app/singleproduct/${item.id}`}
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <div className="price">
                        <span className="current">
                          ${item.priceAfterDiscount}
                        </span>
                        <span className="normal mini-text">${item.price}</span>
                      </div>
                      <div className="stock mini-text">
                        <div className="qty">
                          <span>
                            Stock:
                            <strong className="qty-available">
                              {item.stock}
                            </strong>
                          </span>
                          <span>
                            Sold:
                            <strong className="qty-available">
                              {item.sold}
                            </strong>
                          </span>
                        </div>
                        <div className="bar">
                          <div className="available"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row products mini">
                {Data.slice(5, 9).map((item) => {
                  return (
                    <div className="item" key={item.id}>
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link
                            onClick={handlePageClickWithScroll}
                            to={`/e-commerce-web-app/singleproduct/${item.id}`}
                          >
                            <img src={item.thumbnail} alt="photo" />
                          </Link>
                        </div>
                        <div className="hoverable">
                          <ul>
                            <li className="active">
                              <div className="heart">
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
                                        discountPercentage:
                                          item.discountPercentage,
                                        priceAfterDiscount:
                                          item.priceAfterDiscount,
                                        rating: item.rating,
                                        brand: item.brand,
                                      })
                                    );
                                    toggleFavorite(item.id);
                                  }}
                                  style={
                                    selectedIds.includes(item.id)
                                      ? {
                                          backgroundColor: "#ff6b6b",
                                          opacity: "1",
                                          color: "white",
                                        }
                                      : {}
                                  }
                                >
                                  <LuHeart />
                                </Link>
                              </div>
                            </li>
                            <li
                              onClick={() =>
                                dispatch(
                                  addToCart({
                                    id: item.id,
                                    title: item.title,
                                    img: item.thumbnail,
                                    price: item.price,
                                    priceAfterDiscount: item.priceAfterDiscount,
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
                        <h3
                          className="main-links"
                          onClick={handlePageClickWithScroll}
                        >
                          <Link
                            to={`/e-commerce-web-app/singleproduct/${item.id}`}
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <div className="rating">
                          <div className="stars"></div>
                          <span className="mini-text">({item.rating})</span>
                        </div>
                        <div className="price">
                          <span className="current">
                            ${item.priceAfterDiscount}
                          </span>
                          <span className="normal mini-text">
                            ${item.price}
                          </span>
                        </div>
                        <div className="mini-text">
                          <p className="stock">Stock: {item.stock}</p>
                          <p className="brand">Brand: {item.brand}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row products mini">
                {Data.slice(9, 13).map((item) => {
                  return (
                    <div className="item" key={item.id}>
                      <div className="media">
                        <div className="thumbnail object-cover">
                          <Link
                            onClick={handlePageClickWithScroll}
                            to={`/e-commerce-web-app/singleproduct/${item.id}`}
                          >
                            <img src={item.thumbnail} alt="photo" />
                          </Link>
                        </div>
                        <div className="hoverable">
                          <ul>
                            <li className="active">
                              <div className="heart">
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
                                        discountPercentage:
                                          item.discountPercentage,
                                        priceAfterDiscount:
                                          item.priceAfterDiscount,
                                        rating: item.rating,
                                        brand: item.brand,
                                      })
                                    );
                                    toggleFavorite(item.id);
                                  }}
                                  style={
                                    selectedIds.includes(item.id)
                                      ? {
                                          backgroundColor: "#ff6b6b",
                                          opacity: "1",
                                          color: "white",
                                        }
                                      : {}
                                  }
                                >
                                  <LuHeart />
                                </Link>
                              </div>
                            </li>
                            <li
                              onClick={() =>
                                dispatch(
                                  addToCart({
                                    id: item.id,
                                    title: item.title,
                                    img: item.thumbnail,
                                    price: item.price,
                                    discountPercentage: item.discountPercentage,
                                    priceAfterDiscount: item.priceAfterDiscount,
                                    rating: item.rating,
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
                        <h3
                          className="main-links"
                          onClick={handlePageClickWithScroll}
                        >
                          <Link
                            to={`/e-commerce-web-app/singleproduct/${item.id}`}
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <div className="rating">
                          <div className="stars"></div>
                          <span className="mini-text">({item.rating})</span>
                        </div>
                        <div className="price">
                          <span className="current">
                            ${item.priceAfterDiscount}
                          </span>
                          <span className="normal mini-text">
                            ${item.price}
                          </span>
                        </div>
                        <div className="mini-text">
                          <p className="stock">Stock: {item.stock}</p>
                          <p className="brand">Brand: {item.brand}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
