import "./JoinCommunity.css";

import discord from "assets/Home/discord.svg";
import fb from "assets/Home/fb.svg";
import twitter from "assets/Home/twitter.svg";
import instagram from "assets/Home/instagram.svg";
import youtube from "assets/Home/youtube.svg";
// import linkdin from "assets/Home/linkedin.svg";




import useWindowDimensions from "hooks/windowDimensions";

function Community() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;

  return (
    <div className="community" id="community">
      <div className="container">
        <h2  >JOIN THE CLUB</h2>
        <h3  >Join Our Community</h3>
        <p  >
          Marketplace platform is for creators to buy, sell and trade
          NFT&rsquo;s which can also become part of the Afterverse gaming
          platform for which the creators are aptly rewarded.
        </p>
        <p   className="community-social">
          <a 
            href="https://discord.com/invite/9bAbFE7KgP"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} alt="discord" />
          </a>
          <a  href="/">
            <img src={fb} alt="fb" />
          </a>
          <a 
            href="https://twitter.com/AfterverseSpace"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          {isSmallScreen && <br />}
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
          {/* <a href="/" target="_blank"><img src={linkdin} alt="linkdin" /></a> */}
        </p>
      </div>
    </div>
  );
}

export default Community;
