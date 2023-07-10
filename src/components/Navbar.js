import React from 'react';
import '../css/navbar.css';
import Logo from '../images/logo.png';

function Navbar() {
  return (
    <section className="navbar fixed-top">
      <div className="div_logo_navbar">
        <a href="#section1">
          <img className="logo" alt="Samplify" src={Logo}></img>
        </a>
      </div>
      <div className="div_auth_navbar">
        <button className="btn_connexion">Connexion</button>
        <button className="btn_inscription">Inscription</button>
      </div>
      <div className="div_marketplace_navbar">
        <button className="btn_marketplace">MarketPlace</button>
      </div>
      <div className="div_navigation_navbar">
        <a href="#section1" className="btn_accueil">
          Accueil
        </a>
        <a href="#section2" className="btn_roadmap">
          RoadMap
        </a>
        <a href="#section3" className="btn_team">
          Team
        </a>
      </div>
    </section>
  );
}

export default Navbar;
