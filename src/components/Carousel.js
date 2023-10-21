import bannerImg1 from "../assets/Home/Banner.jpg";
import bannerImg2 from "../assets/Home/Banner2.jpg";
import bannerImg3 from "../assets/Home/Banner3.jpg";
// resposnisve
import bannerImg11 from "../assets/Home/mob-Banner@3x.jpg";
import bannerImg22 from "../assets/Home/mob_Banner2@3x.jpg";
import bannerImg33 from "../assets/Home/mob_Banner3@3x.jpg";

import "./Carousel.css";
import PrimaryButton from "./PrimaryButton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Container } from "react-bootstrap";

import useWindowDimensions from "hooks/windowDimensions";

function Carousel() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;
  const data = [
    {
      heading: "Afterverse" + (isSmallScreen ? "" : " Space"),
      // subhead: "SPACE",
      para: "A completely decentralized Metaverse built for ",
      caption: "Creative Artists, Gamers, Businesses and Crypto Traders.",
      imgSrc:  isSmallScreen ? bannerImg11 : bannerImg1,
      to: "/market-place",
    },
    {
      heading: "AVA",
      // subhead: "SPACE",
      para: "Afterverse Avatars (AVA) are unique representations of",
      caption:
        "superficial after death character in the metaverse that are bound by rule less rules.",
      imgSrc: isSmallScreen ? bannerImg22 : bannerImg2,
      to: "/market-place",
    },
    {
      heading: (isSmallScreen ? "" : "Afterverse") + " Community",
      // subhead: "SPACE",
      para: "The powered economy of the Afterverse and will hold the utmost supremacy for",
      caption:
        "purchases, sale and trading connected to your existing crypto wallet powered by Metamask.",
      imgSrc: isSmallScreen ? bannerImg33 : bannerImg3,
      to: "/market-place",
    },

    // {
    //   heading: "Afterverse",
    //   para: "A completely decentralized Metaverse built for",
    //   caption: "Creative Artists, Gamers, Businesses and Crypto Traders.",
    //   imgSrc: bannerImg,
    // },
  ];
  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" >
      <div className="carousel-inner">
        {data.map((v, i) => {
          const { heading, para, caption, imgSrc } = v;
          const activeClass = i === 0 ? "active" : "";
          return (
            <div key={i} className={`carousel-item ${activeClass} `} >
              <img src={imgSrc} className="d-block" alt="banner" />
              <div className="carousel-caption">
                <h2>{heading}</h2>
                {/* <h3>{subhead}</h3> */}
                <p>
                  {para}
                  <span>{caption}</span>
                </p>
                <a
                  href="https://opensea.io/collection/afterversespace"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>Buy now at OpenSea</PrimaryButton>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {!isSmallScreen && (
        <Container>
          <div className="carousel-widgets">
            <div className="carousel-control carousel-space">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#bannerCarousel"
                data-bs-slide="prev"
              >
                <span aria-hidden="true">
                  <BsArrowLeft />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#bannerCarousel"
                data-bs-slide="next"
              >
                <span aria-hidden="true">
                  <BsArrowRight />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="carousel-indicators">
              {data.map((v, i) => {
                const firstItem = i === 0;
                const itemNo = i + 1;
                return (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide-to={`${i}`}
                    className={firstItem ? "active" : ""}
                    aria-current={firstItem ? "true" : ""}
                    aria-label={`Slide ${itemNo}`}
                  >
                    <span>{`0${itemNo}`}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Carousel;
