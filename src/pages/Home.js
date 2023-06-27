import React from 'react';
import NavBar from '../components/Navbar';
import Context from '../components/Context';

function Home() {
  return (
    <section className="home">
      <div className="home_navbar">
        <NavBar isConnected={false} />
        <Context />
      </div>
    </section>
  );
}

export default Home;
