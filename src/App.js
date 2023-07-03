import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/*" element={<Index />} />
          <Route path="/home" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
