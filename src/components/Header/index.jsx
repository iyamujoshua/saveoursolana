import React from "react";
import img1 from "../../assets/baddie.jpeg"
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
          <h1>Introducing $BADDIE Coin: The Hottest Meme Coin by Twitter's BADDIE!</h1>
          {/* <h1>Gaming is here!</h1> */}
          {/* <p>Grab your $BADDIE were live now!!</p> */}
          <div className="two-btn">
            <div>
            {/* <button className="Buy">
              Buy $BADDIE
            </button> */}
            <a href="https://raydium.io/swap/?inputMint=sol&outputMint=6mLBiFGicnpLtsGMSZTv4poABe8Z1NhALkywrbfZpump" className="Buy">
                Buy $BADDIE
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