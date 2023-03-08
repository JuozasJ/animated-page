import { useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from 'framer-motion'
import ProgramCard from './ProgramCard'

import programs from './programsSlides'

// Priklausomai nuo krypties, ateinama iš viršaus ar apačios,
// parenkama puslapio transition animacija

let variants = {
    initial: (direction) => (direction === 'up' ? {y: '-100vh'} : direction === 'down' ? {y: '100vh'} : {opacity: 0}),
    animate: (direction) => (direction === 'up' ? {y: '0'} : direction === 'down' ? {y: '0'} : {opacity: 1}),
    exit: (direction) => (direction === 'up' ? {y: '100vh', opacity: 0} : {y: '-100vh', opacity: 0})
}

function Programs() {
    const navigateRef = useRef()
    const navigate = useNavigate()
    const locationHook = useLocation()
    
    let direction
    if (locationHook.state) {
        direction = locationHook.state.scrollDirection
    }

    // Pasukus peles rateli nukreipiama į kita puslapį su useNavigate
    // ir perduodama informacija iš kurios krypties.
    // Panaudojau useRef, kad funkcija būtų iškviečiama tik vieną kartą pasukus ratelį:

    const handleWheel = (e) => {
      if (e.deltaY > 0 && !navigateRef.current) {
        navigateRef.current = true
        navigate("/teachers", { state: { scrollDirection: 'down' } })
      } else if (e.deltaY < 0 && !navigateRef.current) {
        navigateRef.current = true
        navigate("/", { state: { scrollDirection: 'up' } })
      }
    }
    
  return (
    <motion.div
        style={{height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                display: 'grid',
                placeItems: 'center'}}
      
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.5 }}
        variants={variants}
        custom={direction}
    >
        <div className='carousel' onWheel={handleWheel}>
            {programs.map((program) => (<ProgramCard card={program}/>))}
        </div>
    </motion.div>
  )
}

export default Programs