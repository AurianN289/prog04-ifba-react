import './App.css';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Animes from './pages/animes';
import Animacoes from './pages/animacoes';
import Galeria from './pages/galeria';
import Catalogo from './pages/catalogo';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        
        <Routes>
          <Route path="/animes" element={<Animes />} />
          <Route path="/animacoes" element={<Animacoes />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
