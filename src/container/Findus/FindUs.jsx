import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Unde suntem ?
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Craiova, Dolj</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Program
        </p>
        <p className="p__opensans">Luni - Duminica: 10:00 am - 21:00 pm</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
       Rezervari
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
