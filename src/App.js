import React, {useEffect} from 'react';
import fullpage from 'fullpage.js';
import Context from './pages/Context';
import {Flex} from '@mantine/core';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Tutorial from './pages/Tutorial';
import Security from './pages/Security';

function App() {
  const fullpageRef = React.createRef();

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: 'undefined',
      responsiveSlides: true,
      anchors: ['context', 'tuto', 'security', 'roadmap', 'team'],
      menu: '#myMenu',
      fixedElements: '#navbar',
      autoScrolling: true,
      scrollHorizontally: true,
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
          }}
        >
          <Tutorial />
        </Flex>
      </section>
      <section className="section">
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <Security />
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
          }}
        >
          <Team />
        </Flex>
      </section>
    </div>
  );
}

export default App;
