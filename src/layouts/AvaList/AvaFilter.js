import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { useNavigate } from "react-router-dom";

import "./AvaFilter.css";

import ava1 from "assets/Home/a1@3x.jpg";
import ava2 from "assets/Home/a2@3x.jpg";
import ava3 from "assets/Home/a3@3x.jpg";
import ava4 from "assets/Home/a4@3x.jpg";
import ava5 from "assets/Home/a5@3x.jpg";
import ava6 from "assets/Home/a6@3x.jpg";
import ava7 from "assets/Home/a7@3x.jpg";
import ava8 from "assets/Home/a8@3x.jpg";
import ava9 from "assets/Home/a9@3x.jpg";
import ava10 from "assets/Home/a10@3x.jpg";
import ava11 from "assets/Home/a11@3x.jpg";
import ava12 from "assets/Home/a12@3x.jpg";
// import ava4 from "assets/Home/ava4.jpg";

// import eth from "assets/Home/eth.svg";

function AvaCard({ imgSrc, title, idx, id, link}) {
  const navigate = useNavigate();
  return (
    <div className="ava-card">
      <div className="img-container">
        <img src={imgSrc} alt="avatars" />
        <div className="btn-container">
        <Col className="card-btn" onClick={() => navigate(`/ava-description/${idx + 1}`)}>VIEW STORY</Col>
         <Col ><a className="card-btn card-btn2" href={link} target="_blank"
            rel="noreferrer">BUY NOW</a></Col>
        </div>
      </div>
      <div className="card-body">
        <p>
          <span className="ava-title">{title}</span>
          <br />
          <span className="ava-id">AVA #{id}</span>
        </p>
        <span style={{ color: "var(--primary-color)", marginRight: "10px" }}>
          {/* ETH +7.34 <img src={eth} alt="eth" style={{ width: "fit-content" }} /> */}
        </span>
      </div>
    </div>
  );
}

function AvaFilter() {
  const data = [
    { id: 1311, index:0, title: "Kawaka", imgSrc: ava1, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118774098131943524"},
    { id: 1312, index:1,title: "Psycho Rock", imgSrc: ava2, category: "rare", link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118775197643571300" },
    { id: 1313, index:2,title: "Irish Apple", imgSrc: ava3, category: "rare", link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118776297155199076" },
    { id: 1314, index:3,title: "Overloader", imgSrc: ava4, category: "rare", link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118780695201710180" },
    { id: 1315, index:4,title: "Kolgrim", imgSrc: ava5, category: "rare", link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118778496178454628" },
    { id: 1316, index:5,title: "Dogfather", imgSrc: ava6, category: "rare", link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118777396666826852" },
    { id: 1317, index:6,title: "KoiJunga", imgSrc: ava7, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118779595690082404"},
    { id: 1318, index:7,title: "JanitorJoe", imgSrc: ava8, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118785093248221284"},
    { id: 1319, index:8, title: "Vasul Raja MBBS", imgSrc: ava9, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118779595690082404"},
    { id: 1320, index:9,title: "PotterPete", imgSrc: ava10, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118783993736593508"},
    { id: 1321, index:10,title: "Aero Neil", imgSrc: ava11, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118782894224965732"},
    { id: 1322, index:11,title: "Apple", imgSrc: ava12, category: "rare" , link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118781794713337956"},

  ];

  const [startIndex, setStartIndex] = useState(0);
  const [category, setCategory] = useState("rare");

  const filteredData = data.filter((val, idx) => val.category === category);
  const cardsPerPage = 8;
  const categoryFilters = [
    {
      category: "rare",
      children: (
        <>
          <Col className="count" lg={3}>
            60
          </Col>
          <Col>
            <Row className="title align-items-center">
              <Col lg={3}>
                RARE
                <br /> NFT AVATARS
              </Col>
              <Col lg={2} className="symbol" >
                *
              </Col>
              <Col lg={7}>100 UNITS EACH</Col>
            </Row>
          </Col>
        </>
      ),
    },
    {
      category: "early",
      children: (
        <>
          <Col lg={3} className="count" >
            6000
          </Col>
          <Col >EARLY BIRD AVATARS</Col>
        </>
      ),
    },
    {
      category: "accessories",
      children: (
        <>
          <Col lg={3} className="count" >
            555
          </Col>
          <Col >ACCESSORIES</Col>
        </>
      ),
    },
    {
      category: "boosters",
      children: (
        <>
          {" "}
          <Col lg={3} className="count" >
            111
          </Col>
          <Col >SUPPLEMENTARY BOOSTERS</Col>
        </>
      ),
    }, 
  ];
  return (
    <Container className="ava-filter-container">
      <Container className="ava-filter">
        <Row>
          {categoryFilters.map((val, idx) => {
            const { children, category: filterCategory } = val;
            const activeCategory = filterCategory === category;
            const props = !activeCategory
              ? {
                  onClick: () => {
                    setCategory(filterCategory);
                    setStartIndex(0);
                  },
                }
              : {};
            return (
              <Col
                key={idx}
                lg={3}
                className={`filter${activeCategory ? " active" : ""}`}
                {...props}
              >
                <Row className="align-items-center">{children}</Row>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="filter-items"  >
        <Row className="filter-items-resp">
          {filteredData.length !== 0 ? filteredData
            .slice(startIndex, startIndex + cardsPerPage)
            .map((val, idx) => (
              <AvaCard key={idx} {...val} idx={val.index}/>
            )) : <div className="filter-items-soon">Coming Soon!</div>}
        </Row>
      </div>
      {filteredData.length > cardsPerPage && (
        <div className="pagination"  >
          {Array.from(
            { length: Math.ceil(filteredData.length / cardsPerPage) },
            (v, idx) => {
              const activePage = Math.floor(startIndex / cardsPerPage) === idx;
              const props = !activePage
                ? {
                    onClick: () => setStartIndex(idx * cardsPerPage),
                  }
                : {};
              return (
                <span
                  key={idx}
                  className={`page-number${activePage ? " active" : ""}`}
                  {...props}
                >
                  {idx + 1}
                </span>
              );
            }
          )}
        </div>
      )}
    </Container>
  );
}

export default AvaFilter;
