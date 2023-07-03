import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import React, { useEffect, useRef } from 'react';
import fullpage from 'fullpage.js';

function App() {

  const fullpageRef = React.createRef();

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      // Options de configuration de FullPage.js
    });
  }, []);

  return (
    <div className="App">
      <div ref={fullpageRef}>
      <section className="section" style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:"blue",
      }}>
        <h1>Section 1</h1>
        {/* Contenu de la section 1 */}
      </section>
      <section className="section" style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:"blue",
      }}>
        <h1>Section 2</h1>
        {/* Contenu de la section 2 */}
      </section>
      <section className="section" style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:"blue",
      }}>
        <h1>Section 3</h1>
        {/* Contenu de la section 3 */}
      </section>
      <section className="section">
        <h1>Section 4</h1>
        {/* Contenu de la section 4 */}
      </section>
      </div>
    </div>
  );
}

export default App;