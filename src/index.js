import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const container : HTMLElement = document.getElementById('root');
const root : Root = ReactDOM.createRoot(container);
root.render(<App />);
