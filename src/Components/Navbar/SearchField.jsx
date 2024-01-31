import { useEffect, useState } from "react";
import productData from "../../products.json";
import { Link } from "react-router-dom";

function SearchField() {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (e) => {
    const searchInfo = e.target.value;
    setSearchInput(searchInfo);
    // filter
    const filtered = productData.filter(
      (product) =>
        product.title &&
        product.title.toLowerCase().includes(searchInfo.toLowerCase())
    );

    setFilterProducts(filtered);
    setIsSearchActive(true);
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilterProducts(productData);
    setIsSearchActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.id !== "search" && !e.target.closest(".search-field")) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-field" id="search-field">
      <input
        type="search"
        placeholder="Search for products"
        name="search"
        id="search"
        value={searchInput}
        onClick={() => setIsSearchActive(true)}
        onChange={handleSearch}
      />
      {isSearchActive && (
        <ul className="search-ul">
          {searchInput &&
            filterProducts.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/e-commerce-web-app/singleproduct/${product.id}`}
                  onClick={clearSearch}
                >
                  <img src={product.thumbnail} alt="a"></img>
                  <p>{product.title}</p>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchField;
