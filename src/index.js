import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './index.css';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='content'>
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);