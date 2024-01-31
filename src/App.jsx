import { Fragment, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // Toggle Menu
  const [showMenu, setShowMenu] = useState("site page-home");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [showSearch, setShowSearch] = useState("showsearch");
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Fragment>
      <div
        id="page"
        className={`site page-home ${!showMenu ? "show-menu" : ""} ${
          !showSearch ? "showsearch" : ""
        }`}
      >
        <Navbar toggleMenu={toggleMenu} toggleSearch={toggleSearch} />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
