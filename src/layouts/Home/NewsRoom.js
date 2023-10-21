import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import useWindowDimensions from "hooks/windowDimensions";

import NewsCard from "components/NewsCard";

import "swiper/css";

import "./NewsRoom.css";



import n1 from "assets/Home/n1.jpg";
import n2 from "assets/Home/n2.jpg";
import n3 from "assets/Home/n3.jpg";
import n4 from "assets/News/list/n12.jpg";

function NewsRoom() {
  const swiperRef = useRef(null);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const isSmallScreen = width < 992;
  const isVerySmallScreen = width < 376;

  const data = [
    {
      imgSrc: n1,
      title: "Top cryptocurrency prices today: Bitcoin, Ethereum, BNB gain...",
      createdAt: "May, 2022",
    },
    {
      imgSrc: n2,
      title: "Telegram users can now send crypto payments to each other",
      createdAt: "May, 2022",
    },
    {
      imgSrc: n3,
      title: "Bitcoin, Ethereum Technical Analysis: Crypto Uncertainty Continues...",
      createdAt: "April, 2022",
    },
    {
      imgSrc: n4,
      title: "Eth2 deposit contract now holds 10% of the circulating ETH supply",
      createdAt: "May, 2022",
    },
  ];

  return (
    <Container className="news-room" id="newsroom">
      <div className="content">
        <h2  >HAPPENINGS</h2>
        <h3  >Newsroom</h3>
        <p  >
          Discover exciting events and latest news on what&rsquo;s happening
          around Afterverse.
        </p>
      </div>
      {!isSmallScreen && (
        <div   className="swiper-controls-container">
          <div className="swiper-controls">
            <BsArrowLeft
              className="swiper-nav-left"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            />
            <BsArrowRight
              className="swiper-nav-right"
              onClick={() => swiperRef.current.swiper.slideNext()}
            />
          </div>
        </div>
      )}
      <Swiper  
        slidesPerView={isSmallScreen ? 1 : 4}
        spaceBetween={isVerySmallScreen ? -10 : isSmallScreen ? -60 : 30}
        loop={true}
        loopFillGroupWithBlank={true}
        ref={swiperRef}
      >
        {data.map((news, idx) => {
          const { imgSrc, title, createdAt } = news;
          return (
            <SwiperSlide key={idx} onClick={() => navigate(`/news/${idx + 1}`)}>
              <NewsCard  imgSrc={imgSrc} title={title} text={createdAt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

export default NewsRoom;
