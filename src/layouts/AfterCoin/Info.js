import { useRef } from "react";

import Container from "react-bootstrap/Container";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import useWindowDimensions from "hooks/windowDimensions";

import "./Info.css";

function InfoCard({ title, children }) {
  return (
    <section className="info-card">
      <h4>{title}</h4>
      {children}
    </section>
  );
}

function Info() {
  const swiperRef = useRef(null);
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;
  const isVerySmallScreen = width < 376;

  const data = [
    {
      title: "How to buy AfterCoin?",
      children: (
        <p>
          The DAO is supported by the Security Advisory Board (SAB). The SAB
          acts as the guarantor of contract security, tasked with the job of
          providing a swift response to bug reports. The Board will be able to
          quickly upgrade the smart contract implementation of the LAND and
          Estate contracts and replace it with a bug-free version upon receiving
          a responsible disclosure bug report. All contract updates must be
          unanimous. Comprising 5 members, the Board will be made up of several
          expert entities or individuals initially chosen by the Decentraland
          team and later appointed by the community.
        </p>
      ),
    },
    {
      title: "What are the benefits of AfterCoin?",
      children: (
        <p>
          Members can be changed by the Aragon DAO &ndash; a vote must be
          started to remove or install a new member. This is an action that will
          involve the community using wMANA. A member of the SAB creates a vote
          for the community to add or remove a member of the SAB and community
          members use wMANA to cast their vote. "You can read more about
          the&nbsp;
          <span className="highlight">Security Advisory Board</span> here."
        </p>
      ),
    },
    {
      title: "Why should I buy AfterCoin?",
      children: (
        <p>
          Initially, until fraud risk is reduced to its minimum extent possible,
          votes will only be created and scheduled by the Security Advisory
          Board (SAB).
        </p>
      ),
    },
  ];
  return (
    <Container className="info">
      <h3>More Info</h3>
      <p className="description">
        Over the coming year we&rsquo;ll be scheduling votes to decide on a
        range of issues, including (but not limited to)
      </p>
      {!isSmallScreen && (
        <div className="swiper-controls-container">
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
        slidesPerView={isSmallScreen ? 1 : 3}
        spaceBetween={isVerySmallScreen ? 0 : isSmallScreen ? 0 : 10}
        loop={true}
        loopFillGroupWithBlank={true}
        ref={swiperRef}
      >
        {data.map((infos, idx) => {
          const { title, children } = infos;
          return (
            <SwiperSlide key={idx}>
              <InfoCard title={title}>{children}</InfoCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isSmallScreen && (
        <div className="swiper-controls-container">
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
    </Container>
  );
}

export default Info;
