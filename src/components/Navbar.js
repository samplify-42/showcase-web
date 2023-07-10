import React from 'react';
import '../css/navbar.css';
import Logo from '../images/logo.png';

function Navbar() {
  return (
    <section id="#myMenu" className="navbar navbar-fixed">
      <div className="div_logo_navbar">
        <a href="#context">
          <img className="logo" alt="Samplify" src={Logo}></img>
        </a>
      </div>
      <div className="div_marketplace_navbar">
        <button style={{fontWeight: 'bold'}}>MarketPlace</button>
      </div>
      <div className="div_navigation_navbar">
        <a href="#context" className="btn_accueil">
          Accueil
        </a>
        <a href="#tuto" className="btn_roadmap">
          Tuto
        </a>
        <a href="#security" className="btn_roadmap">
          security
        </a>
        <a href="#roadmap" className="btn_team">
          roadmap
        </a>
        <a href="#team" className="btn_team">
          team
        </a>
      </div>
    </section>
  );
}

export default Navbar;
