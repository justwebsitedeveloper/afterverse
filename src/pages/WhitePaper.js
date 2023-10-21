import HeroBanner from "components/HeroBanner";

import "./../layouts/NewsDescription/Banner.css";

import afterCoinBg from "assets/Aftercoin/ACBanner.jpg";

function WhitePaper() {
  return (
    <HeroBanner className="ava-list-banner" bgImage={afterCoinBg}>
      <div className="heading">
        <h3>Coming Soon...</h3>
      </div>
      <p>
        The Afterverse provides the unbound freedom of the life after death in a
        meta verse that are bound by ruleless rules that defy gaming physics and
        the laws of existence.
      </p>
    </HeroBanner>
  );
}

export default WhitePaper;

