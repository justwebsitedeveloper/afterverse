import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Accordion } from "react-bootstrap";
import "./Faq.css";



function Faq() {

  return (
      <Container className="faq" id="faq">
        <Row>
          <h2  >HAPPENING</h2>
          <h3  >Frequently Asked Question</h3>
          <p  >
            Discover exciting events and latest news on what&rsquo;s happening around
            Afterverse.
          </p>
          <div className="accordian" >
            <Accordion>
              <Accordion.Item eventKey="0"  >
                <Accordion.Header>
                  What is Afterverse Space Avatars (AVA)?
                </Accordion.Header>
                <Accordion.Body>
                The Afterverse Space Avatars (AVA’s) are unique representations of our superficial character that we want to expressively present in the Afterverse Space. Each character has its own unique abilities and accessories.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"  >
                <Accordion.Header>What is AfterCoin (AC)?</Accordion.Header>
                <Accordion.Body>
                AfterCoin (AC) would act as the governance token in the future and would play a key role in shaping the development progress of the game. The AC is expected to be available for trade on all the popular platforms. Early souls will reap the best long term rewards !
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2"  >
                <Accordion.Header>What is Afterverse Space?</Accordion.Header>
                <Accordion.Body>
               Afterverse Space is a revolutionary new metaverse experience that allows you to earn real world money by playing! In our game, you can convert buildings into utility like theatres or malls, which connect with real-world stores and integrate them seamlessly into the metaverse experience. Our game is totally decentralized and community-centric, so gamers, artists, and aspiring entrepreneurs can come together to collaborate or work independently to build their dream building and give it real world uses. The more you play and contribute to the game, the quicker and higher rewards you'll get. So come join us and start earning today!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3"  >
                <Accordion.Header>
                  Where to buy Afterverse Space Avatars (AVA)?
                </Accordion.Header>
                <Accordion.Body>
                Afterverse Sapce Avatars (AVA) is expected to be initially launched on OpenSea to give early access to all the players to interact with the characters and to get an understanding for what is to come. Don&rsquo;t miss out on the flash sales which are being announced on the Discord channels!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4"  >
                <Accordion.Header>
                  How Afterverse Space is different from any other universe?
                </Accordion.Header>
                <Accordion.Body>
                Afterverse Space is a unique concept allowing fellow gamers to collectively come together to build a unique structures and finding unique real world use cases to generate AC&rsquo;s which will surely make your time spent on the game worth it!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
          </div>
        </Row>
      </Container>
  );
}

export default Faq;
