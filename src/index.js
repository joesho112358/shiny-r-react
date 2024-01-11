import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let root = createRoot(
  document.getElementById('app')
);
root.render(<App />);
