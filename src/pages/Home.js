import React from 'react';
import NavBar from '../components/Navbar';
import Context from './Context';

function Home() {
  return (
    <section
      style={{
        margin: 0,
        padding: 0,
      }}
      className="home"
    >
      <div className="home_navbar">
        <NavBar isConnected={false} />
        <Context />
      </div>
    </section>
  );
}

export default Home;
