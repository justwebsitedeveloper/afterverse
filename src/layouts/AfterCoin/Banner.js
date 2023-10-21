import HeroBanner from "components/HeroBanner";
// import PrimaryButton from "components/PrimaryButton";

import "./Banner.css";

import afterCoinBg from "assets/Aftercoin/ACBanner.jpg";
// import afterCoin from "assets/Aftercoin/AC.svg"

function Banner() {
  return (
    <HeroBanner className="after-coin-banner" bgImage={afterCoinBg}>
      <div className="heading">
        {/* <img src={afterCoin} alt="after-coin" /> */}
        <h3>Coming Soon...</h3>
      </div>
      <p>
        Monetize and build Virtual Economy. AC is used across the platform to
        build, create, buy, invest and trade in assets and NFT&rsquo;s.
      </p>
      {/* <PrimaryButton>Buy $AfterCoin</PrimaryButton> */}
    </HeroBanner>
  );
}

export default Banner;
