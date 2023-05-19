import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import NavContextController from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContextController>
        <App />
      </NavContextController>
    </BrowserRouter>
  </React.StrictMode>,
)
