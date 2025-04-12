import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Craiova, Dolj</p>
        <p className="p__opensans">+4 0722 123 132</p>
        <p className="p__opensans">+4 0770 123 123</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.perinita} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best mancare is cea din burta &quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          alt="spoon"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Program</h1>
        <p className="p__opensans">Luni-Duminica:</p>
        <p className="p__opensans">09:00 - 21:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Perinita. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
