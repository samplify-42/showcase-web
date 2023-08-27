import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MantineProvider} from '@mantine/core';
import Roadmap from './components/Roadmap.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    createRoot(document.getElementById('root')).render(
    <App />)
  </MantineProvider>,
);
