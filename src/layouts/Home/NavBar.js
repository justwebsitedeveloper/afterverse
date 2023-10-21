import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import { ReactComponent as Logo } from "assets/logo/afterverse-logo.svg";
import logo from "assets/logo/AFTLOGO.png";
// import eth from "assets/Home/eth.svg";
import useWindowDimensions from "hooks/windowDimensions";

import SecondaryButton from "components/SecondaryButton";
import fb from "assets/Home/fb.svg";
import twitter from "assets/Home/twitter.svg";
import instagram from "assets/Home/instagram.svg";
import youtube from "assets/Home/youtube.svg";
import linkedin from "assets/Home/linkedin.svg";

import "./NavBar.css";

const isActive = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

function NavBar({ className }) {
  const { width } = useWindowDimensions();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => {
    setShow((s) => !s);
  };

  return (
    <div className="nav-bar-container">
      <Navbar collapseOnSelect expand="lg" variant="dark" className={className}>
        <Container className="nav-space">
          <Navbar.Brand href="/">
            {/* <Logo className="logo" /> */}
            <img className="logo-nav" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleShow}
          />
          {width > 992 ? (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <NavLink className={isActive} to="/" onClick={handleClose}>
                  HOME
                </NavLink>
                {/* <NavLink className={isActive} to="/nft" onClick={handleClose}>
                  NFTs
                </NavLink> */}
                <NavLink
                  className={isActive}
                  to="/white-paper"
                  onClick={handleClose}
                >
                  WHITE PAPER
                </NavLink>
                <NavLink
                  className={isActive}
                  to="/market-place"
                  onClick={handleClose}
                >
                  NFT MARKET PLACE
                </NavLink> 
                <NavLink
                  className={isActive}
                  to="/after-coin"
                  onClick={handleClose}
                >
                  AFTERCOIN
                </NavLink>
                <NavLink
                  className={isActive}
                  to="/news-room"
                  onClick={handleClose}
                >
                  NEWS
                </NavLink>
              </Nav>
              <div>
                {/* <span
                  style={{ color: "var(--primary-color)", marginRight: "10px" }}
                >
                  ETH +7.34 <img src={eth} alt="eth" />
                </span> */}
                <a
                  href="https://discord.com/invite/9bAbFE7KgP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SecondaryButton>JOIN OUR DISCORD</SecondaryButton>
                </a>
              </div>
            </Navbar.Collapse>
          ) : (
            <Navbar.Offcanvas
              id="responsive-navbar-nav"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="side-nav-bg"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <Navbar.Brand href="/">
                    {/* <Logo className="logo" /> */}
                    <img className="logo-nav" src={logo} alt="eth" />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className={isActive} to="/" onClick={handleClose}>
                  Home
                </NavLink>
                  {/* <NavLink className={isActive} to="/nft">
                    NFTs
                  </NavLink> */}
                  <NavLink
                    className={isActive}
                    to="/white-paper"
                    onClick={handleClose}
                  >
                    WHITE PAPER
                  </NavLink>
                  <NavLink
                    className={isActive}
                    to="/market-place"
                    onClick={handleClose}
                  >
                   NFT MARKET PLACE
                  </NavLink>
                  <NavLink
                    className={isActive}
                    to="/after-coin"
                    onClick={handleClose}
                  >
                    AFTERCOIN
                  </NavLink>
                  <NavLink
                    className={isActive}
                    to="/news-room"
                    onClick={handleClose}
                  >
                    NEWS
                  </NavLink>
                </Nav>
                <div
                  style={{
                    marginTop: "70px",
                    height: "80px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginBottom: "50px",
                  }}
                >
                  {/* <span
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "10px",
                    }}
                  >
                    ETH +7.34 <img src={eth} alt="eth" />
                  </span> */}
                   <a
                  href="https://discord.com/invite/9bAbFE7KgP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SecondaryButton>JOIN OUR DISCORD</SecondaryButton>
                  </a>
                </div>
                <p className="sidenav-icons">
                  <a href="/">
                    <img src={fb} alt="fb" />
                  </a>
                  <a href="/">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="/">
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="/">
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a href="/">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </p>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
