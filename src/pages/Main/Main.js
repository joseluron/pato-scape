import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';

import './Main.scss';
import SuperPato from '../../assets/img/superPato.png';
import Mapache from '../../assets/img/mapache.png';

const ALL_TEST = [
  {
    path: '/test/test1',
    test: 'El camino'
  },
  {
    path: '/test/test2',
    test: 'El mensaje secreto'
  }
]

const MainPage = () => {
  return (
    <div className="main-page-container">
      <Nav />
      <div className="main-page-wrapper">
        <img src={SuperPato} alt="Super Pato" />
        <div className="links-container">
          {ALL_TEST.map(test => 
            <Link to={test.path}>
              <div key={test.test} className="test">
                <span>{test.test}</span>
                <img src={Mapache} alt="Mapache" />
              </div>
            </Link>
          )}
        </div>
      </div>  
    </div>
  );
}

export default MainPage;
