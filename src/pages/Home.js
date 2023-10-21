import { useRef } from "react";
import Collections from "layouts/Home/Collections";
import Rewards from "layouts/Home/Rewards";
import MarketPlace from "layouts/Home/MarketPlace";
import GamePlay from "layouts/Home/GamePlay";
import Community from "layouts/Home/JoinCommunity";
// import Team from "layouts/Home/OurTeam";
import Carousel from "components/Carousel";
import RoadMap from "layouts/Home/RoadMap";
import Faq from "layouts/Home/Faq";
import PartnerShip from "layouts/Home/PartnerShip";
import AfterLife from "layouts/Home/AfterLife";
import Avatars from "layouts/Home/Avatars";
import NewsRoom from "layouts/Home/NewsRoom";

function Home() {
  const roadMapEl = useRef(null);
  const handleKnowMore = () =>
    roadMapEl.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Carousel />
      <AfterLife handleKnowMore={handleKnowMore} />
      <Avatars handleKnowMore={handleKnowMore} />
      <Collections />
      <Rewards  handleKnowMore={handleKnowMore}/>
      <RoadMap ref={roadMapEl} />
      <MarketPlace />
      <GamePlay />
      <NewsRoom />
      <Community />
      {/* <Team /> */}
      <Faq />
      <PartnerShip />
    </>
  );
}

export default Home;
