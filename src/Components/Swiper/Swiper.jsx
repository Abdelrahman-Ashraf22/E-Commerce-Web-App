import { Swiper, SwiperSlide } from "swiper/react";
import SwiperData from "../../products.json";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="wrapper">
          <Swiper
            pagination={true}
            autoplay={{
              disableOnInteraction: false,
            }}
            loop={Infinity}
            modules={[Pagination, Autoplay]}
          >
            <div className="myslider swiper">
              <div className="swiper-wrapper">
                {SwiperData.slice(87, 92).map((item, id) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="swiper-slide">
                        <div className="item">
                          <div className="image object-cover">
                            <img src={item.thumbnail} alt="photo"></img>
                          </div>
                          <div className="text-content flexcol">
                            <h4>{item.h4}</h4>
                            <h2>
                              <span> {item.span1}</span> <br></br>
                              <span> {item.span2} </span>
                            </h2>
                            <Link
                              to={`/e-commerce-web-app/singleproduct/${item.id}`}
                              className="primary-button"
                            >
                              Shop Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
