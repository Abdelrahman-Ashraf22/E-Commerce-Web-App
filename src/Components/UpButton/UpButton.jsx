import { FaAngleUp } from "react-icons/fa";
import "./UpButton.css";
const UpButton = () => {
  const Up = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <span className="scroll-up" onClick={Up}>
      <FaAngleUp />
    </span>
  );
};

export default UpButton;
