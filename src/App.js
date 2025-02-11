import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Pages/Portfolio/Portfolio'
import Formation from './Pages/Formation/Formation'
import Skills from './Pages/Skills/Skills'
import Contact from './Pages/Contact/Contact'
import Moi from './Pages/Moi/Moi'
import ScrollBasedNavigation from './Components/ScrollBasedNavigation';


function App() {
  return (
    <div className="App">
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
  );
}

export default App;
