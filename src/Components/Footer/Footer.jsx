/* eslint-disable react/no-unescaped-entities */

import { MdMailOutline } from "react-icons/md";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <div className="container">
          <div className="wrapper">
            <div className="box">
              <div className="content">
                <h3>Join Our Newsletter</h3>
                <p>
                  Get E-mail Updates about Our Latest Shop and
                  <strong> Special Offers</strong>
                </p>
              </div>
              <form action="" className="search">
                <span className="icon-large">
                  <MdMailOutline />
                </span>
                <input type="mail" placeholder="Your email adress" required />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="widgets">
        <div className="container">
          <div className="wrapper">
            <div className="flexwrap">
              <div className="row">
                <div className="item mini-links">
                  <h4>Help & Contact</h4>
                  <ul className="flexcol">
                    <li>
                      <Link to="#">Your Account</Link>
                    </li>
                    <li>
                      <Link to="#">Your Orders</Link>
                    </li>
                    <li>
                      <Link to="#">Shipping Rates</Link>
                    </li>
                    <li>
                      <Link to="#">Returns</Link>
                    </li>
                    <li>
                      <Link to="#">Assistant</Link>
                    </li>
                    <li>
                      <Link to="#">Help</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>Product Categories</h4>
                  <ul className="flexcol">
                    <li>
                      <Link to="#">Beauty</Link>
                    </li>
                    <li>
                      <Link to="#">Electronic</Link>
                    </li>
                    <li>
                      <Link to="#">Women's Fashion</Link>
                    </li>
                    <li>
                      <Link to="#">Men's Fashion</Link>
                    </li>
                    <li>
                      <Link to="#">Girl's Fashion</Link>
                    </li>
                    <li>
                      <Link to="#">Boy's Fashion</Link>
                    </li>
                    <li>
                      <Link to="#">Health & Household</Link>
                    </li>
                    <li>
                      <Link to="#">Pet Supplies</Link>
                    </li>
                    <li>
                      <Link to="#">Sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>Payment Info</h4>
                  <ul className="flexcol">
                    <li>
                      <Link to="#">Business Card</Link>
                    </li>
                    <li>
                      <Link to="#">Shop with Points</Link>
                    </li>
                    <li>
                      <Link to="#">Reload Your Balance</Link>
                    </li>
                    <li>
                      <Link to="#">Paypal</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>About Us</h4>
                  <ul className="flexcol">
                    <li>
                      <Link to="#">Company Info</Link>
                    </li>
                    <li>
                      <Link to="#">News</Link>
                    </li>
                    <li>
                      <Link to="#">Investors</Link>
                    </li>
                    <li>
                      <Link to="#">Careers</Link>
                    </li>
                    <li>
                      <Link to="#">Policies</Link>
                    </li>
                    <li>
                      <Link to="#">Customer Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="container">
          <div className="wrapper">
            <div className="flexcol">
              <div className="logo">
                <Link to="#">
                  <span className="circle"></span>.StoreUp
                </Link>
              </div>
              <div className="socials">
                <ul className="flexitem">
                  <li>
                    <Link to="#">
                      <RiFacebookLine />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <RiTwitterLine />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <RiInstagramLine />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <RiLinkedinLine />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <RiYoutubeLine />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mini-text">
              Copyright 2023 &copy; .StoreUp. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
