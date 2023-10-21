import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

import PrimaryButton from "components/PrimaryButton";
import useWindowDimensions from "hooks/windowDimensions";

import avatar1 from "assets/Home/a1@3x.jpg";
import avatar2 from "assets/Home/a2@3x.jpg";
import avatar3 from "assets/Home/a3@3x.jpg";
import avatar4 from "assets/Home/a4@3x.jpg";
import avatar5 from "assets/Home/a5@3x.jpg";
import avatar6 from "assets/Home/a6@3x.jpg";
import avatar7 from "assets/Home/a7@3x.jpg";
import avatar8 from "assets/Home/a8@3x.jpg";
import avatar9 from "assets/Home/a9@3x.jpg";
import avatar10 from "assets/Home/a10@3x.jpg";
import avatar11 from "assets/Home/a11@3x.jpg";
import avatar12 from "assets/Home/a12@3x.jpg";

import { ReactComponent as Icon1 } from "assets/Home/icon1.svg";
import { ReactComponent as Icon2 } from "assets/Home/icon2.svg";
import { ReactComponent as Icon3 } from "assets/Home/icon3.svg";
import { ReactComponent as Icon4 } from "assets/Home/icon4.svg";
import { ReactComponent as Icon5 } from "assets/Home/icon5.svg";
// import { ReactComponent as Icon6 } from "assets/Home/icon6.svg";
// import { ReactComponent as Icon7 } from "assets/Home/icon7.svg";

import "./AvaDescription.css";

function AvaDescription() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const { id } = useParams();
  const isSmallScreen = width < 992;
  const data = [
    // 1
    {
      avatarImg: avatar1,
      avatarName: "KAWAKA",
      avatarId: "#AVAS0001",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118774098131943524",
      avatarDetails:
        "Kawakama is the last Ninja of Earth. But even after his death, his soul survives the extent of Afterverse Space and roams freely for eternity, to become the protector of the Orbs from evil. A one-of-a-kind warrior, sworn to protect his friends and family in the Afterverse Space. He holds in his possession, the Eternal Sword that carries the spirit of all the past souls of the true Japanese Ninjas. His blades are forged by powers unfathomable. Legends say that he can break through mountains with just a sharp look of his eyes and can breathe so hard that he could at times breathe fire. Most powerful in the darker times of the day, Kawakama can get past you like your own shadow and move like the soothing wind, unknown to the untrained mind. A legend, A survivor, and True Master.",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "Post Sunset Abilities",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Benificial to Friends",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Mine rocks 4X faster",
        },
        {
          icon: <Icon4 width={88} height={88} />,
          detail: "Mines fire 2X Faster",
        },
        {
          icon: <Icon5 width={88} height={88} />,
          detail: "Discreet in movement",
        },
      ],
    },
    // 2
    {
      avatarImg: avatar2,
      avatarName: "Psycho Rock",
      avatarId: "#AVAS0002",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118775197643571300",
      avatarDetails:
        "Psycho Rock was born in Reverb Land. But Reverb Land is a plagued sin of existence ruled and lived by the most notorious and psychopathic communities of the world. It is a world driven by chaos and uncertainty where Rock is the medium of expression and entertainment. But this is no ordinary Rock Music. It is music that can drive a person mad, fry his brains, indulge in lunacy, and even completely control and takeover. Be careful as you enter the glitters of rock because what awaits is pure sin in the form of strings.",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "String Attack - Disorient opponet and collect resources",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Sing a Song - Reel in Vibes from a distance",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Rock It - Shake down resources without effort ",
        },
        {
          icon: <Icon4 width={88} height={88} />,
          detail: "Psycho Rock - Cense of direction to a un identified planet",
        },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 3
    {
      avatarImg: avatar3,
      avatarName: "Irish Apple",
      avatarId: "#AVAS0003",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118776297155199076",
      avatarDetails:
        "Irish Apple is the most distinguished name in the Fashion Industry. The American businesswoman and interior designer is a fashion icon with a powerful influence. She was 100 years old on August 29th of 2019 and in 2022 she reincarnated to the Afterverse Space to become a legendary icon of fashion and influence. Her fashion is blazing as the fire from the breath of a youthful dragon. Her essence of fashion can take control of many with a mesmerizing smile and stun them to give control over the unbelievable looks of the fashionista. ",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail:
            "FBlaze - Use fire to destroy user Builds and aquire resources from them by 10%          ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail:
            "StunSmile - Use to stun users and aquire 50% of thier rewards.          ",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail:
            "PowerUp - Gain 5X powers at all levels when purchasing fashion accessories",
        },
        // {
        //   icon: <Icon4 width={88} height={88} />,
        //   detail: "Psycho Rock - Cense of direction to a un identified planet",
        // },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 4
    {
      avatarImg: avatar4,
      avatarName: "Overloader",
      avatarId: "#AVAS0004",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118780695201710180",
      avatarDetails:
        "He is the sweet side of Afterverse Space. Always wears the tendency to help others - for a price - Overloader dedicated his life to delivering pizzas for the freeworld and earned an honest living out of it. Everyone around him loved him and praised him for his ability to bring them whatever they wished for. His life was built of Pizzas and eating Pizza all the time throughout his life. Unfortunately, he was killed by the very own pizza delivery vehicle he used. How he died is still a mystery. Afterverse Space is lucky to have the Overloader aboard and thanks to his Death Band.",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail:
            "Store and Deliver - Ability to store huge volumes of resources, can also trade resources          ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Speed - Travel at 2X Speed          ",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail:
            "Speed Delivery - Deliver resources 2X faster when in partnership for both.          ",
        },
        {
          icon: <Icon4 width={88} height={88} />,
          detail: "Tips - Collect .5X more that a recieved reward of anykind.",
        },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },

    // 5
    {
      avatarImg: avatar5,
      avatarName: "Kolgrim",
      avatarId: "#AVAS0005",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118778496178454628",
      avatarDetails:
        "Witches and witchcraft have been both hated and revered throughout human history; loved as skilled healers or feminist icons, feared as servants of the devil and practitioners of mysterious dark arts. The Brocken, the highest peak of the Harz mountain range has long been associated with witchcraft and legends, with some sources associating it with sacrifices to the ancient Saxon god Woden (Odin of Norse legend). The peak was also said to be the meeting point for witches on Walpurgisnacht or Hexennacht, on the night of 30 April. Kolgrim was originally incarnated in 1407 in Norwegian Greenland, but she pursued her craft in Brocken, Germany where she ravished and unleashed her hatred for a reason unknown and only could be found at the Peak of Brocken.",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "String Attack - Disorient opponet and collect resources",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Sing a Song - Reel in Vibes from a distance",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Rock It - Shake down resources without effort ",
        },
        {
          icon: <Icon4 width={88} height={88} />,
          detail: "Psycho Rock - Cense of direction to a un identified planet",
        },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 6
    {
      avatarImg: avatar6,
      avatarName: "Dogfather",
      avatarId: "#AVAS0006",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118777396666826852",
      avatarDetails:
        "They say he was first spotted among the wild dogs of eastern Africa. The locals called him 'Veri Naye' meaning the Wild One. He lives among the canines and follows a life that is succulent to the creatures. With them, he learned to hunt, discover with his keen sense of smell, build and approach his enemies in the most ferocious angle, and power to survive the worst of conditions and move as a team and live for one another. His speed and sense of smell are of great importance to the clan along with the immense strength of the Dog Bark. He can summon all his dogs to follow, lead and send on missions that would otherwise take a long time for a human to explore and indulge. ",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail:
            "Bite can kill a person or reduce the power depending on the enemy's strength          ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Mission completion- x2 times faster",
        },
        // {
        //   icon: <Icon3 width={88} height={88} />,
        //   detail: "Rock It - Shake down resources without effort ",
        // },
        // {
        //   icon: <Icon4 width={88} height={88} />,
        //   detail: "Psycho Rock - Cense of direction to a un identified planet",
        // },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 7
    {
      avatarImg: avatar7,
      avatarName: "KoiJunga",
      avatarId: "#AVAS0007",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118779595690082404",
      avatarDetails:
        "Koi Junga is the oldest tribe chief of the world, they roamed the earth realm as hunters and gatherers about some 22000 years ago. They are the first inhabitants of Afterverse Space and have the ruling authority over the Tribal Orb. The Tribal Orb is rich in natural resources and should be on everyone's list of travel within the space of Afterverse. Koi is a fearless leader born to the Sun God and is considered to behold the powers of the Sun, the tribe followed him to death and they live among the Gods of the Afterverse. Although seemingly insignificant, the Koi Tribes hold the most powerful of powers in the Afterverse Space and can simply live a day's life in God Mode. Their oath is to never remove their mask and shall always represent the true history of the human race. The truth is that all are born equal and all shall have the opportunities of power, life, and death within themselves. Legend has it that they can take away your life or give life with a stroke of their amulet, that is lost in the sea to be found by anyone. And when found shall possess the power of Koi and the Sun God.",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail:
            "Snap Fingers - Take away everything from user and bring death permanently.          ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail:
            "Snap Fingers - Give as much as they see fit to any user.          ",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Snap Fingers - Can summon anything and everything.",
        },
        // {
        //   icon: <Icon4 width={88} height={88} />,
        //   detail: "Psycho Rock - Cense of direction to a un identified planet",
        // },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 8
    {
      avatarImg: avatar8,
      avatarName: "JanitorJoe",
      avatarId: "#AVAS0008",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118785093248221284",
      avatarDetails:
        "Joe used to be a researcher in Kyoto. His research findings usually revolved around UV for effective cleaning in the germ containment zones. The calamity destruction brought huge damage across the space and more so in Kyoto. Joe was the only survivor in Kyoto and he is said to have changed after the calamity incident. Joe became obsessed with his research and he wishes to renew Kyoto to the place it was. He is obsessed with cleaning and has been at it since then. When new people started moving back to Kyoto, Joe went rogue and started killing everyone who made the place the slightest of dirty, even with their footprints. which made it impossible for anyone to even walk. ",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "Has increased limit on storing resources- 5x limit.",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "When refreshed his building/utility can be recovered.",
        },
        // {
        //   icon: <Icon3 width={88} height={88} />,
        //   detail: "Snap Fingers - Can summon anything and everything.",
        // },
        // {
        //   icon: <Icon4 width={88} height={88} />,
        //   detail: "Psycho Rock - Cense of direction to a un identified planet",
        // },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 9
    {
      avatarImg: avatar9,
      avatarName: "Vasul Raja MBBS",
      avatarId: "#AVAS0002",
      link: "",
      avatarDetails:
        "A soul truly born to help save lives was gone in an instant. Afterverse Space is so lucky to have the Dead Doc as part of the family. They say that each time you save a life, the victims soul takes a part of your own soul to nourish its longings for the real world. Doc gave his soul part by part to over 1000 victims, that he lost his own. But what he brings to the Afterverse Space is the Karma of saving 1000 lives. Everyone from his universe owes him their life, but docs here to start fresh and build his own life and the only thing that keeps him going now is not giving life to the dead, but taking life from the dead. Long live the Dead Doc's legacy.",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "Ultra Heal - Heal from any situation 1X per day.          ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail:
            "Danger Deal - Doc takes part of the life of another user in contract of a Build.            ",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Heal User for resources.          ",
        },
        {
          icon: <Icon4 width={88} height={88} />,
          detail: "Friends can summon doctor.",
        },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 10
    {
      avatarImg: avatar10,
      avatarName: "PotterPete",
      avatarId: "#AVAS0002",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118783993736593508",
      avatarDetails:
        "Born as the first son of Orb Adiri (Afterlife in Kiwai mythology), PotterPetes original name is Appeardis. In the early centuries, Orb Adiri was wiped out of life by the Demons of the Hell realm over a lost solemn truce with Satan himself. But Appeardis (Potter Pete) reclaimed his avatar in Afterword Space. Fueled by the fire that took away his people, Pete must find his way back to Adiri and resurrect it with Vibes of the Afterverse Space. PotterPete is the child of all magical happenings and possesses immense powers to achieve his dreams, but the only thing that's stopping him is himself. But he quickly learned that the Vibes of Afterverse Space is his true elixir of existence and unimaginable power. ",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "Accio - Sumon Broomstick.            ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Expecto Patronum - Defence against all forces.            ",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Expelliarmus - Make others drop resources.          ",
        },
        {
          icon: <Icon4 width={88} height={88} />,
          detail: "Pottermania - Find unknown Orb.",
        },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 11
    {
      avatarImg: avatar11,
      avatarName: "Aero Neil",
      avatarId: "#AVAS0002",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118782894224965732",
      avatarDetails:
        "Afterverse Space is the home to many intergalactic travelers. Aero Niel is the first citizen of Afterverse Space and holds the golden key to enter any Orb and Realm without interruption of any kind. He holds direction and the map to all Orbs and can travel at will. The only downside is his spacesuit which weighs him down and will always travel slower than other AVA's. But he holds the master plan of Afterverse Space and can choose to share it with anyone he wishes. ",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "Holds the Master Plan            ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail: "Can go anywhere at anytime            ",
        },
        {
          icon: <Icon3 width={88} height={88} />,
          detail: "Share Masterplan",
        },
        // {
        //   icon: <Icon4 width={88} height={88} />,
        //   detail: "Psycho Rock - Cense of direction to a un identified planet",
        // },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
    // 12
    {
      avatarImg: avatar12,
      avatarName: "Apple",
      avatarId: "#AVAS0002",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/100663229373073265379306278634329448050204616960282244835485118781794713337956",
      avatarDetails:
        "When Apple entered the Afterverse he used to roam around the afterverse for a long time. And in that time he came across a lot of orbs and kingdoms and he was always in awe of the findings he saw in each orb. He resolved to create an orb with the best technological inventions the afterverse has ever witnessed. His likes for the technology and his drive to create an orb with the same have made many followers for him. His orb is filled with the most innovative and creative tech inventions. Gradually he became obsessed with the power he achieved through these technological inventions. He started prisoning the tech scientists and making them work for him without any break. Though he is the creator of Tech Orb he is also a monster who imprisons scientists and creative minds to create new inventions for him. ",
      features: [
        {
          icon: <Icon1 width={88} height={88} />,
          detail: "Rare tech inventions            ",
        },
        {
          icon: <Icon2 width={88} height={88} />,
          detail:
            "Can buy rare inventions  from him in return for a scientist or creative minded person",
        },
        // {
        //   icon: <Icon3 width={88} height={88} />,
        //   detail: "Snap Fingers - Can summon anything and everything.",
        // },
        // {
        //   icon: <Icon4 width={88} height={88} />,
        //   detail: "Psycho Rock - Cense of direction to a un identified planet",
        // },
        // {
        //   icon: <Icon5 width={88} height={88} />,
        //   detail: "Mines fire 2X Faster",
        // },
      ],
    },
  ];
  const currentAvatar = data[id - 1];
  // const currentAvatar = data[0];
  return (
    <section className="ava-description">
      <Container>
        <BsArrowLeft
          className="arrow-icons"
          onClick={() => navigate("/market-place")}
        />
        <Row className="justify-content-center">
          <Col lg={4}>
            <img
              className="image-size"
              src={currentAvatar.avatarImg}
              alt="avatar"
            />
          </Col>
          <Col
            lg={4}
            className={`ava-titles${isSmallScreen ? " text-center" : ""}`}
          >
            <h3>{currentAvatar.avatarName}</h3>
            <p className="ava-id">{currentAvatar.avatarId}</p>
            <PrimaryButton
              onClick={() => window.open(currentAvatar.link, "_blank")}
            >
              Buy Now
            </PrimaryButton>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <p className="ava-details">{currentAvatar.avatarDetails}</p>
        </Row>
        <Row
          className={`justify-content-center${
            isSmallScreen ? "" : " row-cols-lg-4"
          } feature-section`}
        >
          {currentAvatar.features.map((feature, idx) => (
            <Col key={idx} lg={3} className="text-center ava-feature">
              <div>{feature.icon}</div>
              <span>{feature.detail}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AvaDescription;
