import React, {useEffect} from 'react';
import fullpage from 'fullpage.js';
import Context from './pages/Context';
import {Flex} from '@mantine/core';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap.tsx';
import * as THREE from 'three';
import {useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';

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
            backgroundColor: '#36566C',
          }}
        >
          <Canvas>
            <ambientLight intensity={0} />
            <spotLight position={[10, 10, 10]} angle={0.45} penumbra={0} />
            <pointLight position={[-10, -10, -10]} />
            <Roadmap position={[-1.2, 0, 0]} />
            <Roadmap position={[1.2, 0, 0]} />
            <Roadmap position={[3.2, 0, 0]} />
            <Roadmap position={[-3.2, 0, 0]} />
          </Canvas>
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
