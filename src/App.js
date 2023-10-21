import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Marquee from "layouts/Home/Marquee";
import NavBar from "layouts/Home/NavBar";
import Footer from "layouts/Home/Footer";

import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="sticky">
        <Marquee>
        CHECKOUT COLLECTIONS @ OpenSea. BuyNow! CHECKOUT COLLECTIONS @ OpenSea. BuyNow! CHECKOUT COLLECTIONS @ OpenSea. BuyNow! CHECKOUT COLLECTIONS @ OpenSea. BuyNow!CHECKOUT COLLECTIONS @ OpenSea. BuyNow! CHECKOUT COLLECTIONS @ OpenSea. BuyNow!
        </Marquee>
        <NavBar className={scrollPosition > 75 ? "bg-dark": ""}/>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
