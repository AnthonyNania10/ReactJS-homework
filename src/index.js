import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';   

import "./styles/global.css"


const reactContentRoot = document.getElementById("root");
const root = ReactDOM.createRoot(reactContentRoot);

root.render(<App />);