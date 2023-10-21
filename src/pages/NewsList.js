import Container from "react-bootstrap/Container";
import HeroBanner from "components/HeroBanner";
import useWindowDimensions from "hooks/windowDimensions";

import { useNavigate } from "react-router-dom";

import newsBackground from "assets/News/list/newsroom-banner.png";

import n1 from "assets/Home/n1.jpg";
import n2 from "assets/Home/n2.jpg";
import n3 from "assets/Home/n3.jpg";
import n5 from "assets/News/list/n5.jpg";
import n6 from "assets/News/list/n6.jpg";
import n7 from "assets/News/list/n7.jpg";
import n8 from "assets/News/list/n8.jpg";
import n9 from "assets/News/list/n9.jpg";
import n10 from "assets/News/list/n10.jpg";
import n11 from "assets/News/list/n11.jpg";
import n12 from "assets/News/list/n12.jpg";
import NewsCard from "components/NewsCard";



function NewsList() {

  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const isSmallScreen = width < 992;
  const data = [
    {
      imgSrc: n1,
      title: " Top cryptocurrency prices today: Bitcoin, Ethereum, BNB gain up to 3%; Dogecoin, Shiba Inu fall",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n2,
      title: "Telegram users can now send crypto payments to each other",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n3,
      title: "Bitcoin, Ethereum Technical Analysis: Crypto Uncertainty Continues, as BTC Drops Again",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n12,
      title: "Eth2 deposit contract now holds 10% of the circulating ETH supply",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n5,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n6,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n7,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n8,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n9,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n10,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n11,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
    {
      imgSrc: n12,
      title: "Metaverse - Explanations, opportunities and Shocking Future",
      createdAt: "March 10, 2022",
    },
  ];
  return (
    <section className="news-list">
      <HeroBanner bgImage={newsBackground} style={{ marginBottom: "50px" }}>
        <h3>Newsroom</h3>
        <p>
          Discovering exciting events and latest news on what&rsquo;s happening
          around Afterverse.
        </p>
      </HeroBanner>
      <Container className="d-flex flex-wrap justify-content-center" >
        {data.map((news, idx) => {
          const { imgSrc, title, createdAt } = news;
          return (
            <NewsCard  
              key={idx}
              onClick={() => navigate(`/news/${idx + 1}`)}
              imgSrc={imgSrc}
              title={title}
              text={createdAt}
              style={{
                marginRight: isSmallScreen ? "0" : "15px",
                marginBottom: "40px",
                width: isSmallScreen ? "100%" : "300px",
              }}
            />
          );
        })}
      </Container>
    </section>
  );
}

export default NewsList;
