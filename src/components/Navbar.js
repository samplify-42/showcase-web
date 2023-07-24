import React from 'react';
import '../css/navbar.css';
import Logo from '../images/logo.png';

function Navbar() {
  return (
    <section id="#myMenu" className="navbar navbar-fixed">
      <div className="div_logo_navbar">
        <a href="#context" className="content-logo">
          <img className="logo" alt="Samplify" src={Logo}></img>
        </a>
      </div>
      <a href="#context" className="div_marketplace_navbar">
        <button style={{fontWeight: 'bold'}}>MarketPlace</button>
      </a>
      <div className="div_navigation_navbar">
        <a href="#context" className="btn_accueil navbar-link">
          Accueil
        </a>
        <a href="#tuto" className="btn_roadmap navbar-link">
          Tutoriel
        </a>
        <a href="#security" className="btn_roadmap navbar-link">
          Securité
        </a>
        <a href="#roadmap" className="btn_team navbar-link">
          Roadmap
        </a>
        <a href="#team" className="btn_team navbar-link">
          Équipe
        </a>
      </div>
    </section>
  );
}

export default Navbar;
