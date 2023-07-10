import React, {useEffect, useRef} from 'react';
import fullpage from 'fullpage.js';
import Context from './pages/Context';
import Navbar from './components/Navbar';

function App() {
  const fullpageRef = React.createRef();

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: 'undefined',
      responsiveSlides: true,
    });
  }, []);

  return (
    <div className="App" ref={fullpageRef}>
      <section className="section" id="section1">
        <div
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <Context />
        </div>
      </section>
      <section
        id="section2"
        className="section"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'blue',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <h1>Section 2</h1>
        </div>
      </section>
      <section
        id="section3"
        className="section"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'blue',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <h1>Section 3</h1>
        </div>
      </section>
      <section
        id="section4"
        className="section"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'blue',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <h1>Section 4</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
