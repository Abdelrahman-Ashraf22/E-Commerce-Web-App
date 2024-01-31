import Banners from "../Banners/Banners";
import Brands from "../Brands/Brands";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Swiper/Swiper";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Blog from "../Blog/Blog";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToFav, removeFromFav } from "../../Redux/CartReducer";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedIds = localStorage.getItem("selectedIds");
    if (savedIds) {
      setSelectedIds(JSON.parse(savedIds));
    }
  }, []);

  // Fav
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleFavorite = (id, item) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter((itemId) => itemId !== id)
      : [...selectedIds, id];

    setSelectedIds(newSelectedIds);
    localStorage.setItem("selectedIds", JSON.stringify(newSelectedIds));

    newSelectedIds.includes(id)
      ? dispatch(
          addToFav({
            id: id,
            title: item.title,
            img: item.thumbnail,
            price: item.price,
            discountPercentage: item.discountPercentage,
            priceAfterDiscount: item.priceAfterDiscount,
            rating: item.rating,
            brand: item.brand,
          })
        )
      : dispatch(
          removeFromFav({
            id: id,
          })
        );
  };

  return (
    <main>
      <Slider />
      <Brands />
      <TrendingProducts
        toggleFavorite={toggleFavorite}
        selectedIds={selectedIds}
        dispatch={dispatch}
      />
      <FeaturedProducts
        toggleFavorite={toggleFavorite}
        selectedIds={selectedIds}
        dispatch={dispatch}
      />
      <Blog />
      <Banners />
    </main>
  );
};

export default Homepage;
