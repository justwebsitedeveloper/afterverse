import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import PrimaryButton from "components/PrimaryButton";

import "./Rewards.css";



import rewards from "assets/Aftercoin/AC.svg";
import { useNavigate } from "react-router-dom";

function Rewards() {
  const navigate = useNavigate();

  return (
    <Row className="rewards" id="rewards">
      <Col lg={6} className="img-container">
        <img src={rewards} alt="Rewards" />
      </Col>
      <Col lg={6}>
        <h2 >BENIFITS</h2>
        <h3 >Rewards</h3>
        <p >
        Early purchase of Afterverse Avatars NFTs will be highly rewarded with <span>AfterCoin</span> on game launch and uninterrupted access at all times for the Afterverse.
        </p>
        <div >
        <PrimaryButton onClick={() => navigate("/after-coin")}>Know More</PrimaryButton>
        </div>
       
      </Col>
    </Row>
  );
}

export default Rewards;
