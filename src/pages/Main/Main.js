import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';

import './Main.scss';
import SuperPato from '../../assets/img/superPato.png';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Nav />
      <div className="main-page-wrapper">
        <img src={SuperPato} alt="Super Pato" />
        <div className="links-container">
          <Link to="/map"><span>Map</span></Link>
          <Link to="/cesar"><span>Cesar</span></Link>
        </div>
      </div>  
    </div>
  );
}

export default MainPage;
