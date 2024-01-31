import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaArrowRight, FaChartLine, FaUser } from "react-icons/fa";
import { IoEarth, IoGiftOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Banners = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 }
    );

    const target = document.querySelector(".target");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <div className="banners">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="banner flexwrap">
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img
                      style={{ width: "fit-content" }}
                      src="https://cdn.dummyjson.com/product-images/32/3.jpg"
                      alt="photo"
                    />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Burtal Sale!</h4>
                    <h3>
                      <span>Get the Deal in here</span>
                      <br />
                      Living Room Sofa
                    </h3>
                  </div>
                  <Link to="#" className="over-li"></Link>
                </div>
              </div>

              <div className="row s">
                <div className="item ">
                  <div className="image">
                    <img
                      style={{ width: "fit-content" }}
                      src="https://cdn.dummyjson.com/product-images/44/2.jpg"
                      alt="photo"
                    />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Burtal Sale!</h4>
                    <h3>
                      <span>Discount everyday</span>
                      <br />
                      Casual Outfit
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="row target">
              <div className="flexwrap ">
                <div className="flexcol icons">
                  <FaUser />
                  <CountUp start={0} end={isVisible ? 2846 : 0} duration={5} />
                  <span>Clients</span>
                </div>

                <div className="flexcol icons">
                  <IoEarth />
                  <CountUp start={0} end={isVisible ? 92 : 0} duration={5} />
                  <span>Countries</span>
                </div>

                <div className="flexcol icons">
                  <IoGiftOutline />
                  <CountUp start={0} end={isVisible ? 20 : 0} duration={5} />
                  <span>Gifts</span>
                </div>

                <div className="flexcol icons">
                  <FaChartLine />
                  <CountUp start={0} end={isVisible ? 6578 : 0} duration={5} />
                  <span>Reach</span>
                </div>
              </div>
            </div>

            <div className="product-categories flexwrap">
              <div className="row">
                <div className="item">
                  <div className="image">
                    <img
                      src="https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
                      alt="photo"
                    />
                  </div>

                  <div className="content mini-links">
                    <h4>Beauty</h4>
                    <ul className="flexcol">
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
                    </ul>
                    <div className="second-links">
                      <Link to="#" className="view-all">
                        View All
                        <FaArrowRight style={{ marginTop: "2px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <div className="image">
                    <img
                      src="https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
                      alt="photo"
                    />
                  </div>

                  <div className="content mini-links">
                    <h4>Gatdets</h4>
                    <ul className="flexcol">
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
                    </ul>

                    <div className="second-links">
                      <Link to="#" className="view-all">
                        View All
                        <FaArrowRight style={{ marginTop: "2px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <div className="image">
                    <img
                      src="https://cdn.dummyjson.com/product-images/97/thumbnail.jpg"
                      alt="photo"
                    />
                  </div>

                  <div className="content mini-links">
                    <h4>Home Decor</h4>
                    <ul className="flexcol">
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
                    <div className="second-links">
                      <Link to="#" className="view-all">
                        View All
                        <FaArrowRight style={{ marginTop: "2px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
