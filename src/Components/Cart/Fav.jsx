import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
const Fav = () => {
  const fav = useSelector((state) => state.cart.fav);

  return (
    <div className="fav">
      <div className="fav-icon">
        <FaRegHeart />
      </div>
      <div className="fly-item">
        <span className="item-number">{fav.length}</span>
      </div>
    </div>
  );
};

export default Fav;
