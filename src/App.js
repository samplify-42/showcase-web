import React, {useEffect, useRef} from 'react';
import fullpage from 'fullpage.js';

function App() {
  const fullpageRef = React.createRef();

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      licenseKey: 'undefined',
    });
  }, []);

  return (
    <div className="App" ref={fullpageRef}>
      <section
        className="section"
        style={{
          backgroundColor: 'blue',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <h1>Section 1</h1>
        </div>
      </section>
      <section
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
