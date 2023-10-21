import Container from "react-bootstrap/Container";
import "./Collections.css";
import avatar from "assets/Home/img3.png";
import PrimaryButton from "components/PrimaryButton";

import useWindowDimensions from "hooks/windowDimensions";
import { useNavigate } from "react-router-dom";


function Collections() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const isSmallScreen = width < 992;

  return (
    
    <Container className="collections" id="collections">
      <div className="description">
        <h2 >COLLECTIONS</h2>
        <h3 >Rarity System</h3>
        <p >
          Rarity purchase collections exposed with higher accounts of
          playability, preferences and rewarded the highest in all
          circumstances. Owning AfterVerse avatars and accessories supported in the
          gaming scenarios and privilege more beneficial monetisation. A
          combination of Afterverse Avatar, accessories with supplementary
          boosters will play a significant role in the Afterverse Gaming
          platform effectively and efficiently.
        </p>
        <div >
        {!isSmallScreen && <PrimaryButton onClick={() => navigate("/white-paper")}>Know More</PrimaryButton>}
        </div>
      
      </div>
      <div className="collection-avatar">
        <img  src={avatar} alt="Avatar" />
        <div className="contents">
          <p >
            <span>{/* Used for styling */}</span>
            <span>
              Tribe Afterverse Avatar (AVA) NFT will be the first priviledged
              man to start build the orbs in Afterverse.
            </span>
          </p>
          <p >
            <span>{/* Used for styling */}</span>
            <span>
              Tribe stick (Accessory) will help to revive the energy 3times/day.
            </span>
          </p>
          <p >
            <span>{/* Used for styling */}</span>
            <span>
              Supplementary booster like - Accessories of Tribe AVA will make
              the Avatar to move/travel and sell the assets more effectively in
              the Afterverse.
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Collections;
