import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from './pages/Index';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
