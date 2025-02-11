import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './index.css';
import App from './App';
import './fontawesome'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='content'>
      <Header />
      <App />
      <Footer />
    </div>
  </BrowserRouter>
);