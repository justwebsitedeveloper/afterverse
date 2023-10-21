import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import "./Footer.css";

// import FooterLogo from "assets/logo/afterverse-logo.svg";
import discord from "assets/Home/discord.svg";
import fb from "assets/Home/fb.svg";
import twitter from "assets/Home/twitter.svg";
import instagram from "assets/Home/instagram.svg";
import youtube from "assets/Home/youtube.svg";
// import linkedIn from "assets/Home/linkedin.svg";
import logo from "assets/logo/AFTLOGO.png";
import useWindowDimensions from "hooks/windowDimensions";

function Footer() {

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;
  const footerList = [
    {
      heading: "QUICK LINKS",
      items: [
        { title: "HOME", link: "/#bannerCarousel" },
        { title: "NFT", link: "/#NFT" },
        { title: "REWARDS", link: "/#rewards" },
        { title: "FAQ", link: "/#faq" },
        { title: "Community", link: "/#community" },
      ],
    },
    {
      heading: "WHITE PAPER",
      items: [
        { title: "ROAD MAP", link: "/#roadmap" },
        { title: "RARITY", link: "/#collections" },
        { title: "GAME PLAY", link: "/#gameplay" },
      ],
    },
    {
      heading: "COMPANY",
      items: [
        { title: "PRIVACY POLICY", link: "/" },
        { title: "HELP", link: "/" },
        { title: "DISCLAIMER", link: "/" },
        { title: "TERMS & CONDITION", link: "/" },
      ],
    },
    {
      heading: "NEWS",
      items: [
        { title: "HOME", link: "/#bannerCarousel" },
        { title: "SIGNIFICANCE", link: "/" },
        { title: "NFT", link: "/#NFT" },
        { title: "NEWSROOM", link: "/#newsroom" },
        { title: "FAQ", link: "/#faq" },
        { title: "TEAM", link: "/#community" },
      ],
    },
  ];

  let FooterItems;

  if (isSmallScreen) {
    FooterItems = () => (
      <>
        {Array.from({ length: footerList.length / 2 }).map((_, idx) => {
          const start = idx * 2;
          const end = start + 2;
          return (
            <Row key={idx}>
              {footerList.slice(start, end).map((col, colIdx) => (
                <Col key={colIdx} xs={3}>
                  <ul className="list-unstyled">
                    <li className="head">{col.heading}</li>
                    {col.items.map((item, idx) => (
                      <li key={idx}>
                        <a className="list-item" href={item.link}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          );
        })}
      </>
    );
  } else {
    FooterItems = () => (
      <Row >
        {footerList.map((col, idx) => (
          <Col key={idx} xs={2}>
            <ul className="list-unstyled">
              <li className="head">{col.heading}</li>
              {col.items.map((item, idx) => (
                <li key={idx}>
                  <a className="list-item" href={item.link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_logo">
            {/* <img src={FooterLogo} alt="FooterLogo" /> */}
            <img className="logo-nav" src={logo} alt="eth" />
            <p>AFTERVERSE</p>
          </div>
          <FooterItems />
        </div>
      </div>
      <Container className="copyrights">
        <div className="copyrights-container">
          <h5>© AFTERVERSE 2022. ALL RIGHTS RESERVED</h5>
          <div className="copyrights-social">
            <a
              href="https://discord.com/invite/9bAbFE7KgP"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discord} alt="discord" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <img src={fb} alt="fb" />
            </a>
            <a
              href="https://twitter.com/AfterverseSpace"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.instagram.com/afterversespace/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCpomQtKnvAeeeMtYAB2XG5A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} alt="youtube" />
            </a>
            {/* <a href="/">
              <img src={linkedIn} alt="linkedin" />
            </a> */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;
