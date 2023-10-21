import { forwardRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import bgImg from "assets/Home/img4.jpg";

import "./RoadMap.css";


const RoadMap = forwardRef((props, ref) => {

  const timelineItems = [
    {
      entry: "April, 2022",
      title: "AFTERVERSE AVATARS - COMMUNITY LAUNCH",
      description: `Launching 60 unique, rare, remarkable NFT characters *100 units each is our first step in building our Afterverse community. Each characters will act a significant role in our Afterverse Gaming platform with their unique abilities to conquer the Afterverse world. Creating an entire Afterverse community to interact, discuss, share, update and learn in our Afterverse social media platforms.`,
    },
    {
      entry: "May, 2022",
      title: "ROAD MAP LAUNCH",
      description: `Who wouldn’t be excited to use our unique NFTs in our Afterverse environment? We will be launching the Road map with focus on the meta verse ability and the gaming concept of Afterverse.`,
    },
    {
      entry: "May, 2022",
      title: "WEBSITE LAUNCH",
      description: `Launching our website focussing on significant way of showcasing all our stories, ideas, updates in this Metaverse world.`,
    },
    {
      entry: "June, 2022",
      title: "AFTERVERSE NFT LAUNCH",
      description: `Launching our first set of highly collectable and rare set of AVA’s to be launched and listed at OpenSea. Watch out for flash sale notification on out social media pages.`,
    },
    {
      entry: "Jan, 2023",
      title: "AFTERVERSE MARKETPLACE LAUNCH",
      description: `Launching our own platform for creators to buy, sell and trade NFTs which can also become part of the Afterverse gaming platform for which the creators are aptly rewarded.`,
    },
    {
      entry: "April, 2023",
      title: "AFTERCOIN LAUNCH",
      description: `Launching our powered economy of Afterverse and will be the utmost supremacy for purchases, sale and trading on the ETH blockchain connected to your existing crypto wallet powered by Metamask.`,
    },
    {
      entry: "Oct, 2023",
      title: "AFTERVERSE LAUNCH",
      description: `Complete entire universe - Afterverse provides the unbound freedom of the life after death in a meta verse that are bound by ruleless rules that defy gaming physics and the laws of existence.`,
    },
    {
      entry: "June, 2024",
      title: "AFTERVERSE GAMING ABILITY LAUNCH",
      description: `Launching significant Afterverse Gaming platform that allows users to play, engage, collect rewards of AfterCoin and create playable and Non-playable characters (NPC) using Afterverse Builder.`,
    },
  ];
  return (
    <div className="roadmap" ref={ref}>
      <Container className="description">
        <Row className="justify-content-center">
          <h2 >AFTERVERSE</h2>
          <h3 >Road Map</h3>
          <p >
          A combination of Afterverse Avatar, accessories with supplementary boosters will play a significant role in the Afterverse Gaming platform effectively and efficiently. The players with early purchases also get an option of getting 2x – 10x quicker cash out benefits and atleast 3x more rewards that normal Afterverse avatars.
          </p>
        </Row>
      </Container>
      <div className="timeline" id="roadmap">
        <img src={bgImg} alt="sun-in-the-ice-region" />
        <Container>
          <Row className="d-flex justify-content-end time-resp">
            <Col xs={6} className="timeline-container">
              {timelineItems.map((item, idx) => {
                const { entry, title, description } = item;
                return (
                  <div key={idx} className="mb-5">
                    <h2>
                      Phase {idx + 1} - {entry}
                    </h2>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
})

export default RoadMap;
