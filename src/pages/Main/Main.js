import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';
import SuperPato from '../../assets/img/superPato.jpg';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-page-wrapper">
        <h1>Pato al rescate!</h1>
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
