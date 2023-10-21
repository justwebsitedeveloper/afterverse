import "./MarketPlace.css";

import marketplace from "assets/Home/img5@3x.jpg";
import PrimaryButton from "components/PrimaryButton";
import { useNavigate } from "react-router-dom";



function MarketPlace() {
  const navigate = useNavigate();

  return (
    <div className="marketplace">
      <div className="details">
        <h2  >PLATFORM</h2>
        <h3  >Market Place</h3>
        <p  >
          Marketplace platform is for creators to buy, sell, trade and mint
          NFT&rsquo;s which can also become part of the Afterverse gaming
          platform for which the creators are aptly rewarded. The copyright for
          all the created artwork is still owned by the original creators as per
          the blockchain systems. At the same time Afterverse and it&rsquo;s
          team also hold the rights to display, use and distribute and modify
          these creations as we see fit.
        </p>
        <div  >
        <PrimaryButton onClick={() => navigate("/market-place")}>Go to MarketPlace</PrimaryButton>

        </div>
      </div>
      <img   src={marketplace} alt="MarketPlace" />
    </div>
  );
}

export default MarketPlace;
