import React from "react";
import "./style.css";
import twitter from "../../assets/twitter.png"
import discord from "../../assets/Discord.png"
import telegram from "../../assets/telegram.png"
import medium from "../../assets/medium.png"

export default function Footer() {
  return (
    <div className="Footer" id="Social">
      <div className="Footer_flex">
<h1> Join our Communities</h1>

      </div>
      <div className="Socials">
    <a href="#" className="parents"><img src={twitter} height={22} width={22} alt="" /></a>
    <a href="#" className="parents"><img src={discord} height={22} width={22} alt="" /></a>
    <a href="#" className="parents"><img src={telegram} height={22} width={22} alt="" /></a>
    <a href="#" className="parents"><img src={medium} height={22} width={22} alt="" /></a>

</div>
    </div>
  );
}

