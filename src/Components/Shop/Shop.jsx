import { useEffect, useState } from "react";
import Data from "../../products.json";
import "../../App.css";
import { LuHeart } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart, addToFav, removeFromFav } from "../../Redux/CartReducer";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Shop = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };
  // Scroll up when click on the item

  const handlePageClickWithScroll = (selectedItem) => {
    handlePageClick(selectedItem);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const itemsPerPage = 16;
  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.floor(Data.length / itemsPerPage);

  // Fav
  const [selectedIds, setSelectedIds] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedIds = localStorage.getItem("selectedIds");
    if (savedIds) {
      setSelectedIds(JSON.parse(savedIds));
    }
  }, []);

  const toggleFavorite = (id) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((itemId) => itemId !== id)
      : [...selectedIds, id];

    setSelectedIds(newSelectedIds);
    localStorage.setItem("selectedIds", JSON.stringify(newSelectedIds));

    newSelectedIds.includes(id)
      ? dispatch(addToFav({ id: id }))
      : dispatch(removeFromFav({ id: id }));
  };

  return (
    <div className="features shop">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="sectop flexitem">
              <h2>
                <span className="circle"></span>
                <span>Shop</span>
              </h2>
            </div>
            <div className="products main flexwrap">
              {Data.slice(13, 78)
                .slice(pagesVisited, pagesVisited + itemsPerPage)
                .map((item) => {
                  return (
                    <div className="item" key={item.id}>
                      <Link
                        to={`/e-commerce-web-app/shop/singleproduct/${item.id}`}
                      >
                        <div
                          className="media"
                          style={{ backgroundColor: "", height: "200px" }}
                        >
                          <div
                            className="thumbnail object-cover"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              onClick={handlePageClickWithScroll}
                              src={item.thumbnail}
                              style={{
                                width: "100%",
                                height: "200px",
                                position: "relative",
                              }}
                              alt=""
                            />
                          </div>
                          <div className="hoverable">
                            <ul>
                              <li className="active">
                                <Link
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
                              </li>
                              <li
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      id: item.id,
                                      title: item.title,
                                      img: item.thumbnail,
                                      price: item.price,
                                      brand: item.brand,
                                      discountPercentage:
                                        item.discountPercentage,
                                      priceAfterDiscount:
                                        item.priceAfterDiscount,
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
                            <span style={{ fontSize: "12px" }}>
                              {item.discountPercentage}%
                            </span>
                          </div>
                        </div>
                        <div className="content">
                          <div className="rating">
                            <div className="stars"></div>
                            <span className="mini-text">({item.rating})</span>
                          </div>
                          <h3 className="main-links">
                            <Link
                              to={`/e-commerce-web-app/shop/singleproduct/${item.id}`}
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <p style={{ fontSize: "12px" }}>
                            brand: {item.brand}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            Stock: {item.stock}
                          </p>
                          <div className="price">
                            <span className="current">
                              ${item.priceAfterDiscount}
                            </span>
                            <span className="normal mini-text">
                              ${item.price}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(handlePageClick, handlePageClickWithScroll)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        breakClassName={"break-me"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
      />
    </div>
  );
};

export default Shop;
