import React from 'react';
import '../css/navbar.css';
import Logo from '../images/logo.png';

function Navbar() {
  return (
    <section className="navbar">
      <div className="div_logo_navbar">
        <img className="logo" alt="Samplify" src={Logo}></img>
      </div>
      <div className="div_auth_navbar">
        <button className="btn_connexion">Connexion</button>
        <button className="btn_inscription">Inscription</button>
      </div>
      <div className="div_marketplace_navbar">
        <button className="btn_marketplace">MarketPlace</button>
      </div>
      <div className="div_navigation_navbar">
        <button className="btn_accueil">Accueil</button>
        <button className="btn_roadmap">RoadMap</button>
        <button className="btn_team">Team</button>
      </div>
    </section>
  );
}

export default Navbar;
