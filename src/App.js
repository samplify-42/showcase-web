import React, {useEffect} from 'react';
import fullpage from 'fullpage.js';
import Context from './pages/Context';
import {Flex} from '@mantine/core';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';

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

      afterLoad: (origin, destination) => {
        console.log('hello');
      },
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
          <Roadmap></Roadmap>
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
      <section className="section">
        <Flex
          style={{
            backgroundColor: 'black',
          }}
        >
          <Footer />
        </Flex>
      </section>
    </div>
  );
}

export default App;
