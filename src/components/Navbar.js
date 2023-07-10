import React from 'react';
import '../css/navbar.css';
import Logo from '../images/logo.png';

function Navbar() {
  return (
    <section id="#myMenu" className="navbar">
      <div className="div_logo_navbar">
        <a href="#firstPage">
          <img className="logo" alt="Samplify" src={Logo}></img>
        </a>
      </div>
      <div className="div_marketplace_navbar">
        <button style={{fontWeight: 'bold'}}>MarketPlace</button>
      </div>
      <div className="div_navigation_navbar">
        <a className="btn_accueil">Accueil</a>
        <a href="#secondPage" className="btn_roadmap">
          RoadMap
        </a>
        <a href="#thirdPage" className="btn_team">
          Team
        </a>
      </div>
    </section>
  );
}

export default Navbar;
