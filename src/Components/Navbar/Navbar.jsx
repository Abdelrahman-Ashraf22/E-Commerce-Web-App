/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Link, useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";
import Fav from "../Cart/Fav";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import {
  MdBluetoothConnected,
  MdOutlineHome,
  MdOutlinePets,
  MdOutlineSportsSoccer,
} from "react-icons/md";
import { GrUserFemale, GrUserManager } from "react-icons/gr";
import {
  RiBearSmileLine,
  RiHeartPulseLine,
  RiMenu2Line,
  RiShieldStarLine,
  RiShirtLine,
  RiTShirtAirLine,
} from "react-icons/ri";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import SearchField from "./SearchField";
import { IoClose, IoStatsChart } from "react-icons/io5";
import { useState } from "react";
import UpButton from "../UpButton/UpButton";
import { BiHome } from "react-icons/bi";

const Navbar = ({ toggleMenu }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (index) => {
    setIsExpanded(isExpanded === index ? false : index);
  };

  const location = useLocation();

  const showleft =
    location.pathname !== "/e-commerce-web-app/signup" &&
    location.pathname !== "/e-commerce-web-app/login" &&
    location.pathname !== "/e-commerce-web-app/shop" &&
    location.pathname !== "/e-commerce-web-app/wishlist" &&
    !location.pathname.startsWith("/e-commerce-web-app/singleproduct/") &&
    !location.pathname.startsWith("/e-commerce-web-app/viewcart") &&
    !location.pathname.startsWith("/e-commerce-web-app/wishlist/") &&
    !location.pathname.startsWith("/e-commerce-web-app/checkout") &&
    !location.pathname.startsWith("/e-commerce-web-app/shop/singleproduct/");

  const handlePageClickWithScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDouble = () => {
    handlePageClickWithScroll();
    toggleMenu();
  };

  return (
    <div>
      <aside className="site-off">
        <div className="desktop-hide">
          <div className="off-canvas">
            <div className="canvas-head flexitem">
              <div className="logo">
                <Link to="/e-commerce-web-app/">
                  <span className="circle"></span>.StoreUp
                </Link>
              </div>
              <Link to="#" className="t-close flexcenter" onClick={toggleMenu}>
                <IoClose />
              </Link>
            </div>

            <div className="departments">
              <div className="dpt-head">
                <div className="main-text">All Departments</div>
              </div>
              <div className="dpt-menu">
                <ul className="second-links">
                  <li
                    className={`has-child beauty ${
                      isExpanded === 0 ? "expand" : ""
                    }`}
                    onClick={() => handleExpand(0)}
                  >
                    <Link to="#">
                      <div className="icon-large">
                        <RiBearSmileLine />
                      </div>
                      Beauty
                      <div className="icon-small">
                        <IoIosArrowDown />
                      </div>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Makeup</Link>
                      </li>
                      <li>
                        <Link to="#">Skin Care</Link>
                      </li>
                      <li>
                        <Link to="#">Hair Care</Link>
                      </li>
                      <li>
                        <Link to="#">Fragrance</Link>
                      </li>
                      <li>
                        <Link to="#">Foot & Hand Care</Link>
                      </li>
                      <li>
                        <Link to="#">Tools & Accessories</Link>
                      </li>
                      <li>
                        <Link to="#">Shave & Hair Removal</Link>
                      </li>
                      <li>
                        <Link to="#">Personal Care</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`has-child electric ${
                      isExpanded === 1 ? "expand" : ""
                    }`}
                    onClick={() => handleExpand(1)}
                  >
                    <Link to="#">
                      <div className="icon-large">
                        <MdBluetoothConnected />
                      </div>
                      Electronic
                      <div className="icon-small">
                        <IoIosArrowDown />
                      </div>
                    </Link>

                    <ul>
                      <li>
                        <Link to="#">Camera</Link>
                      </li>
                      <li>
                        <Link to="#">Cell Phones</Link>
                      </li>
                      <li>
                        <Link to="#">Computers</Link>
                      </li>
                      <li>
                        <Link to="#">GPS & Navigation</Link>
                      </li>
                      <li>
                        <Link to="#">Headphones</Link>
                      </li>
                      <li>
                        <Link to="#">Home Audio</Link>
                      </li>
                      <li>
                        <Link to="#">Television</Link>
                      </li>
                      <li>
                        <Link to="#">Video Projectors</Link>
                      </li>
                      <li>
                        <Link to="#">Wearable Technology</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`has-child fashion ${
                      isExpanded === 2 ? "expand" : ""
                    }`}
                    onClick={() => handleExpand(2)}
                  >
                    <Link to="#">
                      <div className="icon-large">
                        <RiTShirtAirLine />
                      </div>
                      Women's Fashion
                      <div className="icon-small">
                        <IoIosArrowDown />
                      </div>
                    </Link>

                    <ul>
                      <li>
                        <Link to="#">Clothes</Link>
                      </li>
                      <li>
                        <Link to="#">Shoes</Link>
                      </li>
                      <li>
                        <Link to="#">Jewelry</Link>
                      </li>
                      <li>
                        <Link to="#">Watches</Link>
                      </li>
                      <li>
                        <Link to="#">Headphones</Link>
                      </li>
                      <li>
                        <Link to="#">Handbags</Link>
                      </li>
                      <li>
                        <Link to="#">Accessories</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-child fashion">
                    <Link to="#">
                      <div className="icon-large">
                        <RiShirtLine />
                      </div>
                      Men's Fashion
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <div className="icon-large">
                        <GrUserFemale />
                      </div>
                      Girls's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="icon-large">
                        <GrUserManager />
                      </div>
                      Boy's Fashion
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="icon-large">
                        <RiHeartPulseLine />
                      </div>
                      Health & Household
                    </Link>
                  </li>
                  <li
                    className={`has-child homekit ${
                      isExpanded === 3 ? "expand" : ""
                    }`}
                    onClick={() => handleExpand(3)}
                  >
                    <Link to="#">
                      <div className="icon-large">
                        <MdOutlineHome />
                      </div>
                      Home & Kitchen
                      <div className="icon-small">
                        <IoIosArrowDown />
                      </div>
                    </Link>
                    <div className="mega">
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <Link to="#">Kitchen & Dining</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link to="#">Kitchen</Link>
                            </li>
                            <li>
                              <Link to="#">Dining Room</Link>
                            </li>
                            <li>
                              <Link to="#">Pantry</Link>
                            </li>
                            <li>
                              <Link to="#">Great Room</Link>
                            </li>
                            <li>
                              <Link to="#">Breakfast Nook</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <h4>
                            <Link to="#">Living Room</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link to="#">Family Room</Link>
                            </li>
                            <li>
                              <Link to="#">Sunroom</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <Link to="#">Bed & Bath</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link to="#">Bathroom</Link>
                            </li>
                            <li>
                              <Link to="#">Powder Room</Link>
                            </li>
                            <li>
                              <Link to="#">Bedroom</Link>
                            </li>
                            <li>
                              <Link to="#">Storage & Closet</Link>
                            </li>
                            <li>
                              <Link to="#">Baby & Kids</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <h4>
                            <Link to="#">Utility</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link to="#">Laundry</Link>
                            </li>
                            <li>
                              <Link to="#">Garage</Link>
                            </li>
                            <li>
                              <Link to="#">Mudroom</Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <Link to="#">Outdoor</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link to="#">Landscape</Link>
                            </li>
                            <li>
                              <Link to="#">Patio</Link>
                            </li>
                            <li>
                              <Link to="#">Deck</Link>
                            </li>
                            <li>
                              <Link to="#">Backyard</Link>
                            </li>
                            <li>
                              <Link to="#">Porch</Link>
                            </li>
                            <li>
                              <Link to="#">Exterior</Link>
                            </li>
                            <li>
                              <Link to="#">Outdoor Kitchen</Link>
                            </li>
                            <li>
                              <Link to="#">Front Yard</Link>
                            </li>
                            <li>
                              <Link to="#">Driveway</Link>
                            </li>
                            <li>
                              <Link to="#">Poolhouse</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="row">
                          <h4>
                            <Link to="#">Living Room</Link>
                          </h4>
                          <ul>
                            <li>
                              <Link to="#">Family Room</Link>
                            </li>
                            <li>
                              <Link to="#">Sunroom</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link to="#">
                      <div className="icon-large">
                        <MdOutlinePets />
                      </div>
                      Pet Supplies
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="icon-large">
                        <MdOutlineSportsSoccer />
                      </div>
                      Sports
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <div className="icon-large">
                        <RiShieldStarLine />
                      </div>
                      Best Seller
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <nav>
              <ul className="flexitem second-links">
                <li>
                  <Link to="/e-commerce-web-app/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/e-commerce-web-app/shop" onClick={toggleMenu}>
                    Shop
                  </Link>
                </li>

                <li
                  className={`has-child ${isExpanded === 4 ? "expand" : ""}`}
                  onClick={() => handleExpand(4)}
                >
                  <Link to="#" onClick={handleDouble}>
                    Women
                    <div className="icon-small">
                      <IoIosArrowDown />
                    </div>
                  </Link>
                  <div className="mega">
                    <div className="container">
                      <div className="wrapper">
                        <div className="flexcol">
                          <div className="row">
                            <h4>Women's Clothing</h4>
                            <ul>
                              <li>
                                <Link to="#">Dresses</Link>
                              </li>
                              <li>
                                <Link to="#">Tops & Tees</Link>
                              </li>
                              <li>
                                <Link to="#">Jackets & Coats</Link>
                              </li>
                              <li>
                                <Link to="#">Paints & Capris</Link>
                              </li>
                              <li>
                                <Link to="#">Sweaters</Link>
                              </li>
                              <li>
                                <Link to="#">Costumes</Link>
                              </li>
                              <li>
                                <Link to="#">Hoodies & Sweatshirts</Link>
                              </li>
                              <li>
                                <Link to="#">Pajamas & Robes</Link>
                              </li>
                              <li>
                                <Link to="#">Shorts</Link>
                              </li>
                              <li>
                                <Link to="#">Swimwear</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flexcol">
                          <div className="row">
                            <h4>Jewelry</h4>
                            <ul>
                              <li>
                                <Link to="#">Accessories</Link>
                              </li>
                              <li>
                                <Link to="#">Bags & Purses</Link>
                              </li>
                              <li>
                                <Link to="#">Necklaces</Link>
                              </li>
                              <li>
                                <Link to="#">Rings</Link>
                              </li>
                              <li>
                                <Link to="#">Earrings</Link>
                              </li>
                              <li>
                                <Link to="#">Bracelets</Link>
                              </li>
                              <li>
                                <Link to="#">Body Jewelry</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flexcol">
                          <div className="row">
                            <h4>Beauty</h4>
                            <ul>
                              <li>
                                <Link to="#">Bath Accessories</Link>
                              </li>
                              <li>
                                <Link to="#">Makeup & Cosmetics</Link>
                              </li>
                              <li>
                                <Link to="#">Skin Care</Link>
                              </li>
                              <li>
                                <Link to="#">Hair Care</Link>
                              </li>
                              <li>
                                <Link to="#">Essential Oils</Link>
                              </li>
                              <li>
                                <Link to="#">Fragrances</Link>
                              </li>
                              <li>
                                <Link to="#">Soaps & Bath Bombs</Link>
                              </li>

                              <li>
                                <Link to="#">Face Masks & Coverings</Link>
                              </li>

                              <li>
                                <Link to="#">SpLink Kits & Gifts</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flexcol">
                          <div className="row">
                            <h4>Top Brands</h4>
                            <ul className="women-brands">
                              <li>
                                <Link to="#">Nike</Link>
                              </li>
                              <li>
                                <Link to="#">Louis Vuitton</Link>
                              </li>
                              <li>
                                <Link to="#">Hermes</Link>
                              </li>
                              <li>
                                <Link to="#">Gucci</Link>
                              </li>
                              <li>
                                <Link to="#">Zalando</Link>
                              </li>
                              <li>
                                <Link to="#">Tiffany & Co.</Link>
                              </li>
                              <li>
                                <Link to="#">H&M</Link>
                              </li>

                              <li>
                                <Link to="#">Zara</Link>
                              </li>

                              <li>
                                <Link to="#">Cartier</Link>
                              </li>

                              <li>
                                <Link to="#">Chanel</Link>
                              </li>

                              <li>
                                <Link to="#">Hurley</Link>
                              </li>
                            </ul>

                            <Link to="#" className="view-all">
                              View all brands
                              <i className="ri-arrow-right-line"></i>
                            </Link>
                          </div>
                        </div>

                        <div className="flexcol products">
                          <div className="media">
                            <div className="thumbnail object-cover">
                              <Link to="#">
                                <img
                                  src="https://images.pexels.com/photos/8387134/pexels-photo-8387134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                  alt="photo"
                                ></img>
                              </Link>
                            </div>
                          </div>
                          <div className="text-content">
                            <h4>Most Wanted!</h4>
                            <Link
                              to={`/e-commerce-web-app/singleproduct/87`}
                              className="primary-button"
                            >
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="#" onClick={handleDouble}>
                    Men
                  </Link>
                </li>

                <li>
                  <Link to="#" onClick={handleDouble}>
                    Sports
                    <div className="fly-item">
                      <span>New!</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="thetop-nav">
              <div className="left">
                <ul className="flexitem main-links">
                  <li>
                    <Link to="/e-commerce-web-app/#blog" onClick={handleDouble}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/e-commerce-web-app/#features"
                      onClick={handleDouble}
                    >
                      Featured Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/e-commerce-web-app/wishlist"
                      onClick={handleDouble}
                    >
                      Whishlist
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="right">
                <ul className="flexitem main-links">
                  <li>
                    <Link
                      to="/e-commerce-web-app/signup"
                      onClick={handleDouble}
                    >
                      Sign Up
                    </Link>
                  </li>

                  <li>
                    <Link to="/e-commerce-web-app/login" onClick={handleDouble}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={handleDouble}>
                      My Account
                    </Link>
                  </li>

                  <li>
                    <ul>
                      <li className="current">
                        <Link to="#">USD</Link>
                      </li>
                      <li>
                        <Link to="#">Euro</Link>
                      </li>
                      <li>
                        <Link to="#">GBP</Link>
                      </li>
                      <li>
                        <Link to="#">IDR</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <ul>
                      <li className="current">
                        <Link to="#">English</Link>
                      </li>

                      <li>
                        <Link to="#">German</Link>
                      </li>

                      <li>
                        <Link to="#">Spanish</Link>
                      </li>

                      <li>
                        <Link to="#">Bahasa</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <header>
        <div className="header-top mobile-hide">
          <div className="container">
            <div className="wrapper flexitem">
              <div className="left">
                <ul className="flexitem main-links">
                  <li
                    onClick={() =>
                      document
                        .querySelector(".blog")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Link to="/e-commerce-web-app/#blog">Blog</Link>
                  </li>
                  <li
                    onClick={() =>
                      document
                        .querySelector(".features")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Link to="/e-commerce-web-app/#features">
                      Featured Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/e-commerce-web-app/wishlist">Whishlist</Link>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul className="flexitem main-links">
                  <li>
                    <Link to="/e-commerce-web-app/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/e-commerce-web-app/login">Login</Link>
                  </li>
                  <li>
                    <Link to="#">My Account</Link>
                  </li>
                  <li>
                    <Link to="#">Order Tracking</Link>
                  </li>
                  <li>
                    <Link to="#">
                      USD
                      <span className="icon-small">
                        <IoIosArrowDown />
                      </span>
                    </Link>
                    <ul>
                      <li className="current">
                        <Link to="">USD</Link>
                      </li>
                      <li>
                        <Link to="">Euro</Link>
                      </li>
                      <li>
                        <Link to="">GBP</Link>
                      </li>
                      <li>
                        <Link to="">IDR</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">
                      English
                      <span className="icon-small">
                        <IoIosArrowDown />
                      </span>
                    </Link>
                    <ul>
                      <li className="current">
                        <Link to="">English</Link>
                      </li>
                      <li>
                        <Link to="">German</Link>
                      </li>
                      <li>
                        <Link to="">Spanish</Link>
                      </li>
                      <li>
                        <Link to="">Bahasa</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-nav">
          <div className="container">
            <div className="wrapper flexitem">
              <Link
                to="#"
                className="trigger desktop-hide"
                onClick={toggleMenu}
              >
                <RiMenu2Line />
              </Link>
              <div className="left flexitem">
                <div className="logo">
                  <Link to="/e-commerce-web-app/">
                    <span className="circle"></span>.StoreUp
                  </Link>
                </div>
                <nav className="mobile-hide">
                  <ul className="flexitem second-links">
                    <li>
                      <Link to="/e-commerce-web-app/">Home</Link>
                    </li>
                    <li>
                      <Link to="/e-commerce-web-app/shop">Shop</Link>
                    </li>
                    <li className="has-child">
                      <Link to="">
                        Women
                        <div className="icon-small">
                          <IoIosArrowDown />
                        </div>
                      </Link>
                      <div className="mega">
                        <div className="container">
                          <div className="wrapper">
                            <div className="flexcol">
                              <div className="row">
                                <h4>Women's Clothing</h4>
                                <ul>
                                  <li>
                                    <Link to="#">Dresses</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Tops & Tees</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Jackets & Coats</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Paints & Capris</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Sweaters</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Costumes</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hoodies & Sweatshirts</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Pajamas & Robes</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Shorts</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Swimwear</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Jewelry</h4>
                                <ul>
                                  <li>
                                    <Link to="#">Accessories</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Bags & Purses</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Necklaces</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Rings</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Earrings</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Bracelets</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Body Jewelry</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Beauty</h4>
                                <ul>
                                  <li>
                                    <Link to="#">Bath Accessories</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Makeup & Cosmetics</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Skin Care</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hair Care</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Essential Oils</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Fragrances</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Soaps & Bath Bombs</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Face Masks & Coverings</Link>
                                  </li>
                                  <li>
                                    <Link to="#">SpLink Kits & Gifts</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Top Brands</h4>
                                <ul className="women-brands">
                                  <li>
                                    <Link to="#">Nike</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Louis Vuitton</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hermes</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Gucci</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Zalando</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Tiffany & Co.</Link>
                                  </li>
                                  <li>
                                    <Link to="#">H&M</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Zara</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Cartier</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Chanel</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Hurley</Link>
                                  </li>
                                </ul>
                                <Link to="#" className="view-all">
                                  View All Brands
                                  <FaArrowRight style={{ marginTop: "10px" }} />
                                </Link>
                              </div>
                            </div>
                            <div className="flexcol products">
                              <div className="row">
                                <div className="media">
                                  <div className="thumbnail object-cover">
                                    <Link to="#">
                                      <img
                                        src="https://images.pexels.com/photos/8387134/pexels-photo-8387134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="photo"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="text-content">
                                  <h4>Most Wanted!</h4>
                                  <Link
                                    to={`/e-commerce-web-app/singleproduct/87`}
                                    className="primary-button"
                                  >
                                    Order Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="">Men</Link>
                    </li>
                    <li>
                      <Link to="">
                        Sports
                        <div className="fly-item">
                          <span>New!</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="right">
                <ul className="flexitem second-links">
                  <li className="mobile-hide">
                    <div className="icon-large">
                      <Link to="/e-commerce-web-app/wishlist">
                        <span className="heart">
                          <Fav />
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <span className="iscart">
                      <div className="icon-large">
                        <span className="cart">
                          <Cart />
                        </span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main ">
          <div className="container">
            <div className="wrapper flexitem">
              {showleft && (
                <div className="left">
                  <div className="dpt-cat">
                    <div className="dpt-head">
                      <div className="main-text">All Departments</div>
                      <div className="mini-text mobile-hide">
                        Total 1059 Products
                      </div>
                    </div>
                    <div className="dpt-menu">
                      <ul className="second-links">
                        <li className="has-child beauty">
                          <Link to="">
                            <div className="icon-large">
                              <RiBearSmileLine />
                            </div>
                            Beauty
                            <div className="icon-small">
                              <IoIosArrowForward />
                            </div>
                          </Link>
                          <ul>
                            <li>
                              <Link to="">Makeup</Link>
                            </li>
                            <li>
                              <Link to="">Skin Care</Link>
                            </li>
                            <li>
                              <Link to="">Hair Care</Link>
                            </li>
                            <li>
                              <Link to="">Fragrance</Link>
                            </li>
                            <li>
                              <Link to="">Foot & Hand Care</Link>
                            </li>
                            <li>
                              <Link to="">Tools & Accessories</Link>
                            </li>
                            <li>
                              <Link to="">Shave & Hair Removal</Link>
                            </li>
                            <li>
                              <Link to="">Personal Care</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child electric">
                          <Link to="">
                            <div className="icon-large">
                              <MdBluetoothConnected />
                            </div>
                            Electronic
                            <div className="icon-small">
                              <IoIosArrowForward />
                            </div>
                          </Link>
                          <ul>
                            <li>
                              <Link to="">Camer</Link>
                            </li>
                            <li>
                              <Link to="">Cell Phones</Link>
                            </li>
                            <li>
                              <Link to="">Computers</Link>
                            </li>
                            <li>
                              <Link to="">GPS & Navigation</Link>
                            </li>
                            <li>
                              <Link to="">Headphones</Link>
                            </li>
                            <li>
                              <Link to="">Home Audio</Link>
                            </li>
                            <li>
                              <Link to="">Television</Link>
                            </li>
                            <li>
                              <Link to="">Video Projectors</Link>
                            </li>
                            <li>
                              <Link to="">Wearable Technology</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child fashion">
                          <Link to="">
                            <div className="icon-large">
                              <RiTShirtAirLine />
                            </div>
                            Women's Fashion
                            <div className="icon-small">
                              <IoIosArrowForward />
                            </div>
                          </Link>
                          <ul>
                            <li>
                              <Link to="">Clothins</Link>
                            </li>
                            <li>
                              <Link to="">Shoes</Link>
                            </li>
                            <li>
                              <Link to="">Jewelry</Link>
                            </li>
                            <li>
                              <Link to="">Watches</Link>
                            </li>
                            <li>
                              <Link to="">Headphones</Link>
                            </li>
                            <li>
                              <Link to="">Handbags</Link>
                            </li>
                            <li>
                              <Link to="">Accessories</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child fashion">
                          <Link to="">
                            <div className="icon-large">
                              <RiShirtLine />
                            </div>
                            Men's Fashion
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <div className="icon-large">
                              <GrUserFemale />
                            </div>
                            Girls's Fashion
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <div className="icon-large">
                              <GrUserManager />
                            </div>
                            Boy's Fashion
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <div className="icon-large">
                              <RiHeartPulseLine />
                            </div>
                            Health & Household
                          </Link>
                        </li>

                        <li className="has-child homekit">
                          <Link to="">
                            <div className="icon-large">
                              <MdOutlineHome />
                            </div>
                            Home & Kitchen
                            <div className="icon-small">
                              <IoIosArrowForward />
                            </div>
                          </Link>
                          <div className="mega">
                            <div className="flexcol">
                              <div className="row">
                                <h4>
                                  <Link to="#">Kitchen & Dining</Link>
                                </h4>
                                <ul>
                                  <li>
                                    <Link to="#">Kitchen</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Dining Room</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Pantry</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Great Room</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Breakfast Nook</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="row">
                                <h4>
                                  <Link to="#">Living</Link>
                                </h4>
                                <ul>
                                  <li>
                                    <Link to="#">Living Room</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Family Room</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Sunroom</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="flexcol">
                              <div className="row">
                                <h4>
                                  <Link to="#">Bed & Bath</Link>
                                </h4>
                                <ul>
                                  <li>
                                    <Link to="#">Bathroom</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Powder Room</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Bedroom</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Storage & Closet</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Baby & Kids</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="row">
                                <h4>
                                  <Link to="#">Utility</Link>
                                </h4>
                                <ul>
                                  <li>
                                    <Link to="#">Laundry</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Garage</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Mudroom</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="flexcol">
                              <div className="row">
                                <h4>
                                  <Link to="#">Outdoor</Link>
                                </h4>
                                <ul>
                                  <li>
                                    <Link to="#">Landscape</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Patio</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Deck</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Backyard</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Porch</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Exterior</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Outdoor Kitchen</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Front Yard</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Driveway</Link>
                                  </li>
                                  <li>
                                    <Link to="#">Poolhouse</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <Link to="">
                            <div className="icon-large">
                              <MdOutlinePets />
                            </div>
                            Pet Supplies
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                            <div className="icon-large">
                              <MdOutlineSportsSoccer />
                            </div>
                            Sports
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                            <div className="icon-large">
                              <RiShieldStarLine />
                            </div>
                            Best Seller
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div className="right">
                <div className="search-box">
                  <form action="" className="search">
                    <span className="icon-large">
                      <LuSearch />
                    </span>
                    <SearchField />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UpButton />
      </header>

      <div className="menu-bottom desktop-hide">
        <div className="container">
          <div className="wrapper">
            <nav>
              <ul className="flexitem">
                <li onClick={handlePageClickWithScroll}>
                  <Link href="/">
                    <BiHome />
                    <span>Home</span>
                  </Link>
                </li>

                <li
                  onClick={() =>
                    document
                      .querySelector(".trending")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Link to="/e-commerce-web-app/#trending">
                    <IoStatsChart />
                    <span>Trending</span>
                  </Link>
                </li>

                <li onClick={handlePageClickWithScroll}>
                  <Link to="/e-commerce-web-app/wishlist">
                    <FaRegHeart />
                    <span>Whishlist</span>
                  </Link>
                </li>
                {/*
                <li>
                  <Link href="" className="t-search">
                    <LuSearch />
                    <span>Search</span>
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="/e-commerce-web-app/viewcart"
                    onClick={handlePageClickWithScroll}
                  >
                    <LuShoppingCart />
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
  );
};

export default Navbar;
