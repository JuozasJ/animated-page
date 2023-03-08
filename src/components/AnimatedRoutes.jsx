import { Route, Routes, useLocation } from "react-router-dom"
import Home from './Home'
import Programs from './Programs'
import Teachers from './Teachers'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()

    let direction
    if (location.state) {
        direction = location.state.scrollDirection
    }
        /*
            Nustatoma iš kurios pusės pereinamą į komponentą
            iš viršaus arba iš apačios ir kryptis perduodama AnimatePresence,
            kad būtų galima parinkti animacijos variantą.
            Į puslapius nukreipia React Router biblioteka.
        */

  return (
    <AnimatePresence mode="wait" custom={direction}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/teachers" element={<Teachers />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes