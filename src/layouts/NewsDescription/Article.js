import image from "assets/News/Description/newdes.jpg";
import Container from "react-bootstrap/Container";

import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import "./Article.css";

function Article() {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentIdx = id - 1;
  const data = [
    // 1
    <>
      <p className="date">May 2022</p>
      <h3>Bitcoin, Ethereum, BNB gain up to 3%; Dogecoin, Shiba Inu fall</h3>
      <p>
        New Delhi: Major crypto tokens were showing mixed trends on Friday as
        behemoths rose, whereas other altcoins dropped marginally. The crypto
        markets are facing high volatility following earnings from tech
        megacaps, rising inflation, monetary policy tightening and unsettling
        economic data.
      </p>
      <img src={image} alt="article-hero-banner" />
      <p>
        Barring top tokens like Bitcoin, Ethereum and BNB, which gained about
        1-3 per cent, all other major crypto tokens were trading with minor
        losses on Friday. Avalanche dropped 5 per cent, followed by a 4 per cent
        fall in Terra.
      </p>
      <p>
        The global cryptocurrency market cap was trading at $1.80 trillion,
        marginally down in the last 24 hours. However, the total cryptocurrency
        trading volume zoomed about 14 per cent to $95.54 billion.
      </p>
    </>,
    // 2
    <>
      <p className="date">Jun 2022</p>
      <h3>Telegram users can now send crypto payments to each other</h3>
      <p>
        The TON Foundation, a decentralized layer-1 blockchain designed by
        Telegram, has added a new crypto payments feature to the messaging app,
        the organization announced on April 26. The feature allows users to send
        Toncoin, the organization’s cryptocurrency, to other Telegram users
        without any transaction fees.
      </p>
      <img src={image} alt="article-hero-banner" />
      <p>
        “With this service, you’ll no longer need to enter long wallet addresses
        and wait for confirmations,” the Foundation said in a tweet announcing
        the feature. The feature is similar to the Bitcoin payments function
        that Elon Musk’s Twitter has been offering through its Tip Jar feature
        since September last year. Twitter, however, uses the Stripe platform
        for such payments.
      </p>
      <p>
        “We anticipate that this functionality will extend into the consumer to
        business payments so that people can easily acquire goods and services
        by sending toncoin via bots in the Telegram app,” the TON Foundation
        said.
      </p>
      <p>
        Toncoin platform boasts over 52 million transactions so far, with over
        486,000 wallets, according to the TON Foundation’s website. The Toncoin
        token was issued in 2019-20 when the US Securities and Exchange
        Commission (SEC) blocked Telegram’s $1.7 billion token issuances for an
        initial coin offering (ICO).
      </p>
      <p>
        “Our emergency action today is intended to prevent Telegram from
        flooding the US markets with digital tokens that we allege were
        unlawfully sold,” said Stephanie Avakian, co-director of the SEC’s
        Division of Enforcement, at the time. “We allege that the defendants
        have failed to provide investors with information regarding Grams and
        Telegram’s business operations, financial condition, risk factors, and
        management that the securities laws require,” he added.
      </p>
      <p>
        The TON Foundation was formed by members of the blockchain community who
        wanted to keep Telegram’s crypto efforts alive. In fact, Telegram’s
        chief executive Pavel Durov, announced in May 2020, that the company was
        going to abandon its blockchain project altogether after the battle with
        the SEC.
      </p>
      <p>
        “Today is a sad day for us here at Telegram. We are announcing the
        discontinuation of our blockchain project,” Durov wrote on his Telegram
        channel. The TON Foundation, however, had raised $1 billion worth of
        Toncoin earlier this month.
      </p>
      <p>
        The Telegram platform is said to have over 550 million users so far, and
        the TON Foundation’s bot on the messaging app has over 800,000 users.
      </p>
    </>,
    // 3
    <>
      <p className="date">May 2022</p>
      <h3>
        Bitcoin, Ethereum Technical Analysis: Crypto Uncertainty Continues, as
        BTC Drops Again
      </h3>
      <p>
        Crypto prices continued to seesaw on Friday, as both bitcoin and
        ethereum fell into the red, after a short lived rally on Thursday.
        Bitcoin was once again below $40,000 during the session, while ethereum
        extended its recent spell of trading below $3,000.
      </p>
      <img src={image} alt="article-hero-banner" />
      <p>
        Bitcoin (BTC) once again fell below the $40,000 level on Friday,
        following a short stint in the green during yesterday’s session.
      </p>
      <p>
        Following a peak of $40,269.47 on Thursday, BTC/USD fell to an intraday
        low of $38,698.16 earlier today.
      </p>
      <p>
        This comes as BTC was unable to climb above resistance of $40,500, as
        bullish momentum eased, which was likely a result of traders closing
        positions.
      </p>
      <p>
        Now that we are back in the red, the first thought would be for how
        long, with some likely to be targeting the $37,570 floor as a potential
        exit point.
      </p>
      <p>
        Looking at the chart, the 14-day RSI has also changed course, and is now
        tracking at a floor of its own marginally below 43.
      </p>
      <p>
        If price strength were to continue to fall beyond this point, we could
        see this shift in momentum entice even more bears to re-enter the
        market.
      </p>
    </>,
    // 4
    <>
      <p className="date">May 2022</p>
      <h3>Eth2 deposit contract now holds 10% of the circulating ETH supply</h3>
      <p>
        The ETH 2.0 deposit contract can only be unblocked after the PoS
        transition, postponed to the latter half of the year.
      </p>
      <img src={image} alt="article-hero-banner" />
      <p>
        The deposit contract for staking Ethereum (ETH) on the Beacon Chain
        reached a balance of 12 million ETH on Friday. The total locked value of
        Ether in the Eth2 contract is worth about $34.5 billion. The deposit
        contract was launched in November 2020 and currently holds around 10% of
        the total circulating supply of ETH.
      </p>
      <p>
        The Beacon Chain is the first major step in Ethereum's transition from a
        proof-of-work (PoW) to a proof-of-stake (PoS) consensus model. A trader
        must invest a minimum of 32 ETH to become a validator in Eth2. Thus, the
        largest Beacon Chain contract, valued at $34.5 billion, highlights the
        enormous demand and trust in the future Eth2, despite several delays
        over the past year.
      </p>
      <p>
        ETH devs started the community testing of the PoS network in December,
        however, the tentative merger date of June 2022 was postponed again,
        without any certain date for the merger being offered.
      </p>
      <p>
        Ethereum’s biggest upgrade since its inception has faced numerous
        challenges and continuous delays along the way. Despite that, the
        deposit contract has grown significantly with over 2 million ETH
        deposited over the last two months. Ethereum’s move to PoS has generated
        varied sentiments in the crypto market where on one hand, the
        energy-conscious group has lauded the move, claiming it would bring down
        the network’s consumption by 90%; on the other hand, Bitcoin (BTC)
        proponents such as Jack Dorsey believe PoS mining consensus is more
        centralized and less secure than PoW.
      </p>
    </>,
  ];
  return (
    <Container className="article">
      <BsArrowLeft className="arrow-icon" onClick={() => navigate(-1)} />
      <section className="content-container">
        <div className="content">{data[currentIdx]}</div>
      </section>
    </Container>
  );
}

export default Article;
