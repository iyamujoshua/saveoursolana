import React from "react";
import img1 from "../../assets/save.jpeg"
// import circle2 from "../../assets/circle2.png"
// import circle3 from "../../assets/circle_blur.svg"
import "./style.css";
const Header = () => {
  return (
    <div>
      <div className="Header_flex">
      <div className="circle-background">
          {/* <img src={circle2} alt="" /> */}
        </div>
        <div className="circle-background1">
          {/* <img src={circle3} alt="" /> */}
        </div>
        <div className="Header_content">
          <h1>Save Our Solana ($SOS): The Meme Coin Revolution
          </h1>
          {/* <h1>Gaming is here!</h1> */}
          <p>Tired of watching celebrities and influencers turn our beloved Solana into a circus? Enter SAVE OUR SOLANA ($SOS), the meme coin that’s rallying the community to take back our blockchain paradise.
          </p>
          <p>Join the $SOS movement and reclaim Solana from the glittering grasp of fame-seekers. Let’s restore its glory with the power of memes and community spirit. It’s time to save our Solana, one hilarious meme at a time!
          </p>
          <div className="two-btn">
            <div>
            {/* <button className="Buy">
              Buy $BADDIE
            </button> */}
            <a href="" className="Buy">
                Buy $SOS
            </a>
            </div>
            <div>
            {/* <button className="whitepaper">
              WhitePaper
            </button> */}
            </div>
          </div>
        </div>
        <div className="header_bg">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;