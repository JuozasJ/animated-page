import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from './components/AnimatedRoutes'
import Menu from './components/Menu'
import AboutUs from './components/AboutUs'

function App() {
  const [menuOpen, setMenuOpen] = useState(false) // State skirta About puslapio animacijai

  /*
    Pagrindinė komponentų sudėtis. Menu ir AboutUs komponentai visada aktyvūs,
    o Login, Programs ir Teachers pereina vienas į kitą su scroll animacija
    pasukus pelės ratelį arba su mygtuku.
  */

  return ( 
    <div style={{ position: 'relative', overflow: 'hidden' }} >
      <Router>
        <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <AnimatedRoutes />
        <AboutUs menuOpen={menuOpen} />
      </Router>
    </div>
  );
}

export default App
