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
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
      menu: '#myMenu',
    });
  }, []);

  return (
    <div className="App" ref={fullpageRef}>
      <section
        className="section"
        href="#firstPage"
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
          <h1>Section 2</h1>
        </Flex>
      </section>
      <section className="section">
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <h1>Section 3</h1>
        </Flex>
      </section>
      <section
        className="section"
        // id="section4"
      >
        <Flex
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <h1>Section 4</h1>
        </Flex>
      </section>
    </div>
  );
}

export default App;
