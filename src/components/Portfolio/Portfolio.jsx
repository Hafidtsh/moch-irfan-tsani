import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/aws 1.jpg";
import Ecommerce from "../../img/Pemogramman.jpg";
import HOC from "../../img/Alibaba-Cloud.png";
import MusicApp from "../../img/linux.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        <SwiperSlide>
          <img src={Sidebar} alt="" style={{ height: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" style={{ height: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" style={{ height: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" style={{ height: "250px" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
