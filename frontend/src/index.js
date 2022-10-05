import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import App from './App';
import "bulma/css/bulma.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

