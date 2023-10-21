import "./Wallets.css";

import binance from "assets/Aftercoin/Binance-Logo 1.png";
import upBit from "assets/Aftercoin/surface1.png";
import lcx from "assets/Aftercoin/logo_white 1.png";
import wazirx from "assets/Aftercoin/Wazirx_logo 1.png";
import biThumb from "assets/Aftercoin/Bithumb_logo 1.png";
import kuCoin from "assets/Aftercoin/kucoin_logo-freelogovectors 1.png";
import Container from "react-bootstrap/Container";

function Wallets() {
  return (
    <section className="wallets">
      <Container>
      <h3>AfterCoin available on</h3>
      <p className="coins">
        <img src={binance} alt="Binance" />
        <img src={upBit} alt="UPBit" />
        <img src={biThumb} alt="bithumb" />
        <img src={lcx} alt="LCX" />
        <img src={wazirx} alt="Wazrix" />
        <img src={kuCoin} alt="KUCOIN" />
      </p>
      </Container>
    </section>
  );
}

export default Wallets;
