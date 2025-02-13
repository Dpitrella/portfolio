import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Portfolio from './Pages/Portfolio/Portfolio'
import Formation from './Pages/Formation/Formation'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import Moi from './Pages/Moi/Moi'
import ScrollBasedNavigation from './Components/ScrollBasedNavigation';




function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Dante Pitrella Portfolio</title>
          <meta name="description" content="Portfolio de Dante Pitrella - Développeur Web" />
          <meta property="og:title" content="Dante Pitrella - Portfolio" />
          <meta property="og:description" content="Portfolio de Dante Pitrella - Développeur Web créatif et passionné" />
          <meta property="og:image" content={`${process.env.PUBLIC_URL}/2025-02-13.webp`} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Dante Pitrella - Portfolio" />
          <meta property="twitter:description" content="Portfolio de Dante Pitrella - Développeur Web créatif et passionné" />
          <meta property="twitter:image" content={`${process.env.PUBLIC_URL}/2025-02-13.webp`} />
        </Helmet>
        <ScrollBasedNavigation>
          <Routes>
            <Route path="/" element={<Moi />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/formation' element={<Formation />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </ScrollBasedNavigation>
      </div>
    </HelmetProvider>
  );
}

export default App;
