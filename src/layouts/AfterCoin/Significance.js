import "./Significance.css";

import abstractImage from "assets/Aftercoin/img1.jpg";

function Significance() {
  return (
    <section className="after-coin-significance">
      <div className="details">
        <h3>Significance of AfterCoin</h3>
        <p>
          Marketplace platform is for creators to buy, sell and trade NFT&rsquo;s
          which can also become part of the Afterverse gaming platform for which
          the creators are aptly rewarded. The copyright for all the created
          artwork is still owned by the original creators as per the blockchain
          systems. At the same time Afterverse and it&rsquo;s team also hold the
          rights to display, use and distribute and modify these creations as we
          see fit.
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
            <li>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
            <li>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
        </ul>
      </div>
      <img src={abstractImage} alt="Abstract" />
    </section>
  );
}

export default Significance;
