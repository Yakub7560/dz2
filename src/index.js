import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './task1';
import DarkMode from './task2';
import Hello from './hello';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter/>
  <DarkMode/>
  <Hello/>
  </>
);


