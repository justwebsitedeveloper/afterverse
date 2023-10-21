import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useWindowDimensions from "hooks/windowDimensions";

import "./KeyMetrics.css";

function KeyMetrics() {
  const data = [
    { ticket: "TOTAL TOKEN SUPPLY", afterCoin: "1,000,000,000 AFTERCOIN" },
    { ticket: "BINANCE LAUNCHPAD", afterCoin: "0.008333 USD/AFTERCOIN" },
    { ticket: "TOTAL TOKEN SUPPLY", afterCoin: "~1,000,000,000 AFTERCOIN" },
  ];
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;
  const xsSize = isSmallScreen ? 5 : 4;

  return (
    <Container className="key-metrics">
      <h3>Key Metrics</h3>
      <section className="after-coin">
        <Row className="heading justify-content-between">
          <Col className="first-col">TICKET</Col>
          <Col xs={xsSize}>AFTERCOIN</Col>
        </Row>
        {data.map((item, idx) => (
          <Row key={idx}>
            <Col className="first-col">{item.ticket}</Col>
            <Col xs={xsSize}>{item.afterCoin}</Col>
          </Row>
        ))}
      </section>
    </Container>
  );
}

export default KeyMetrics;
