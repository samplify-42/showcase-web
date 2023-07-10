import React, {useEffect} from 'react';
import fullpage from 'fullpage.js';
import Context from './pages/Context';
import {Flex} from '@mantine/core';
import Navbar from './components/Navbar';

function App() {
  const fullpageRef = React.createRef();

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: 'undefined',
      responsiveSlides: true,
      anchors: ['context', 'tuto', 'security', 'roadmap', 'team'],
      menu: '#myMenu',
      fixedElements: '#navbar',
    });
  }, []);

  return (
    <div className="App" ref={fullpageRef}>
      <section id="navbar">
        <Navbar />
      </section>
      <section
        className="section"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Context />
      </section>
      <section className="section">
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
            paddingTop: '50px',
          }}
        >
          <h1>Tuto</h1>
        </Flex>
      </section>
      <section className="section">
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
            paddingTop: '50px',
          }}
        >
          <h1>Security</h1>
        </Flex>
      </section>
      <section className="section">
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
            paddingTop: '50px',
          }}
        >
          <h1>roadmap</h1>
        </Flex>
      </section>
      <section className="section">
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
            paddingTop: '50px',
          }}
        >
          <h1>team</h1>
        </Flex>
      </section>
    </div>
  );
}

export default App;
