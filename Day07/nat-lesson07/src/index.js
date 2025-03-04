import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NatApp from './natApp';

const Nat_root = ReactDOM.createRoot(document.getElementById('Nat_root'));
Nat_root.render(
  <React.StrictMode>
    <NatApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();