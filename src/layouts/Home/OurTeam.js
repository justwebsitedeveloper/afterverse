import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import useWindowDimensions from "hooks/windowDimensions";

import "./OurTeam.css";

// import team1 from "assets/Home/t1.png";
import team2 from "assets/Home/t2.png";

function Team() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 992;
  const gutterSize = isSmallScreen ? "" : "g-5"; 
  return (
    <Container className="team">
      <Row>
        <Col lg={6}>
          <h2>GROUP FOR FUTURE</h2>
          <h3>Our Team</h3>
          <p>
            Afterverse Story gies unbound freedom of the life after death in the
            metaverse that are bound by ruleless rules that defy gaming physics
            and the law of existence.
          </p>
        </Col>
        <Col lg={6}>
          <Row className={`${gutterSize} team-list`}>
            <Col lg={6}>
              <img src={team2} alt="Team1" />
              <p>
                Treble Puns is a 2 member, multi-instrumental, music production
                team based in Bangalore, India formed in 2019.
              </p>
            </Col>

            <Col lg={6}>
              <img src={team2} alt="Team1" />
              <p>
                Treble Puns is a 2 member, multi-instrumental, music production
                team based in Bangalore, India formed in 2019.
              </p>
            </Col>
            <Col lg={6}>
              <img src={team2} alt="Team2" />
              <p>
                Treble Puns is a 2 member, multi-instrumental, music production
                team based in Bangalore, India formed in 2019.
              </p>
            </Col>
            <Col lg={6}>
              <img src={team2} alt="Team2" />
              <p>
                Treble Puns is a 2 member, multi-instrumental, music production
                team based in Bangalore, India formed in 2019.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
