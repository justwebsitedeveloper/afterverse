import useWindowDimensions from "hooks/windowDimensions";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { Swiper, SwiperSlide } from "swiper/react";



import PrimaryButton from "components/PrimaryButton";
import SecondaryButton from "components/SecondaryButton";

import "./Avatars.css";
import { useNavigate } from "react-router-dom";

import ava1 from "assets/Home/ava1.jpg";
import ava2 from "assets/Home/ava2.jpg";
import ava3 from "assets/Home/ava3.jpg";
import ava4 from "assets/Home/ava4.jpg";

const AvatarSlider = ({ isSmallScreen, isVerySmallScreen }) => {
  let spaceBetween = isSmallScreen ? -60 : 30;
  spaceBetween = isVerySmallScreen ? -20 : spaceBetween;
  return (
    <Swiper
      slidesPerView={isSmallScreen ? 1 : 4}
      spaceBetween={spaceBetween}
      loop={true}
      loopFillGroupWithBlank={true}
    >
      <SwiperSlide>
        <img src={ava1} alt="ava1" className="img-fluid mb-3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ava2} alt="ava2" className="img-fluid mb-3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ava3} alt="ava3" className="img-fluid mb-3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ava4} alt="ava4" className="img-fluid mb-3" />
      </SwiperSlide>
    </Swiper>
  );
};

function Avatars() {
  const items = [
    { title: "EARLY BIRD AVATARS", counts: 6000 },
    { title: "ACCESSORIES", counts: 555 },
    { title: "SUPPLEMENTARY BOOSTERS", counts: 111 },
  ];
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;
  const isVerySmallScreen = width < 376;
  let descriptionWidth = isSmallScreen ? 12 : 5;
  const navigate = useNavigate();

  return (
    <Container className="avatars" id="NFT">
      <Row>
        <Col xs={descriptionWidth} className="me-auto">
          <h2 >NFT</h2>
          <h3 >
            Afterverse
            <br />
            Avatars (AVA)
          </h3>
          <p  className="mb-5">
            The AVA&rsquo;s are unique representations of our superficial
            character that we want to expressively present in the Afterverse.
            Each of the NFT&rsquo;s have unique abilities that can be customized
            with a load out function offered for the Rare AVA owners who had
            already will purchase the NFTs from our marketplace.
          </p>
          <div className="mb-5 d-flex align-items-center justify-content-between">
            <span  className="chip">60</span>
            <span className="d-flex  w-75 align-items-center justify-content-between">
              <span > 
                RARE
                <br />
                NFT AVATARS
              </span>
              <span   className="multiply">*</span>
              <span >100 UNITS EACH</span>
            </span>
          </div>
          <div className="d-flex flex-wrap w-100 justify-content-between mb-5 count-resp">
            {items.map((item, idx) => (
              <div key={idx} className="item">
                <span   className="item-counts">{item.counts}</span>
                <br />
                <span  className="item-title">{item.title}</span>
              </div>
            ))}
          </div>
          {isSmallScreen && (
            <AvatarSlider
              isSmallScreen={isSmallScreen}
              isVerySmallScreen={isVerySmallScreen}
            />
          )}
          <div  className="cta-section">
            <a
              href="https://opensea.io/collection/afterversespace"
              target="_blank"
              rel="noreferrer"
            >
              <PrimaryButton className="me-3">Buy Now</PrimaryButton>
            </a>
            <SecondaryButton onClick={() => navigate("/market-place")}>
              Know More
            </SecondaryButton>
          </div>
        </Col>
        {!isSmallScreen && (
          <Col xs={6} >
            <Row className="image-gallery">
              <Col className="first-col pe-0">
                <img src={ava1} alt="ava1" className="img-fluid mb-3" />
                <img src={ava3} alt="ava3" className="img-fluid mb-3" />
              </Col>
              <Col className="pe-0">
                <img src={ava2} alt="ava2" className="img-fluid mb-3" />
                <img src={ava4} alt="ava4" className="img-fluid mb-3" />
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Avatars;
