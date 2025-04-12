import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Dining With Style</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, vitae rem aliquid id voluptas odit laudantium ducimus quas, animi neque necessitatibus recusandae, ex amet! Magnam similique veritatis tempora iure sint! </p>
      <button type="button" className="custom__button">Meniu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;