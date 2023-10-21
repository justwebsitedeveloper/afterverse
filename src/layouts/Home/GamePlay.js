import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import PrimaryButton from "components/PrimaryButton";
import icon1 from "assets/Home/icon1.svg";
import icon2 from "assets/Home/icon2.svg";
import icon3 from "assets/Home/icon3.svg";
import icon4 from "assets/Home/icon4.svg";
import icon5 from "assets/Home/icon5.svg";
import icon6 from "assets/Home/icon6.svg";
import icon7 from "assets/Home/icon7.svg";

import "./GamePlay.css";




import useWindowDimensions from "hooks/windowDimensions";
import { useNavigate } from "react-router-dom";

function GamePlay() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const isSmallScreen = width < 992;

  return (
    <div className="gameplay" id="gameplay">
      <div className="container">
        <Row className="gameplay-container">
          <Col lg={4}>
            <h2  >PLATFORM</h2>
            <h3  >Game Play</h3>
            <p  >
              Marketplace platform is for creators to buy, sell, trade and mint
              NFT&rsquo;s which can also become part of the Afterverse gaming
              platform for which the creators are aptly rewarded. The copyright
              for all the created artwork is still owned by the original
              creators as per the blockchain systems. At the same time
              Afterverse and it&rsquo;s team also hold the rights to display,
              use and distribute and modify these creations as we see fit.
            </p>
            <div  >
            {!isSmallScreen && <PrimaryButton onClick={() => navigate("/white-paper")}>Go to White Paper</PrimaryButton>}

            </div>
          </Col>
          <Col lg={6} className="mt-5">
            <Row>
              <Col className="gameplay-list-1">
                <div>
                  <img   src={icon1} alt="orbs" />
                  <p  >Orbs</p>
                </div>
                <div>
                  <img  src={icon3} alt="Embarkment Point" />
                  <p >Embarkment Point</p>
                </div>
                <div>
                  <img   src={icon5} alt="Heaven" />
                  <p >Heaven</p>
                </div>
                <div>
                  <img  src={icon7} alt="Hell" />
                  <p >Hell</p>
                </div>
              </Col>
              <Col className="gameplay-list-2">
                <div>
                  <img  src={icon2} alt="Sell Assets" />
                  <p >Sell Assets</p>
                </div>
                <div>
                  <img  src={icon4} alt="Buy Assets" />
                  <p >Buy Assets</p>
                </div>
                <div>
                  <img  src={icon6} alt="Infinity" />
                  <p >Infinity</p>
                </div>
              </Col>
            </Row>
            <div >
            {isSmallScreen && <PrimaryButton>Go to White Paper</PrimaryButton>}

            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GamePlay;
