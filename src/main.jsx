import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ConfigProvider from "./config-context"
import App from './App'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
)