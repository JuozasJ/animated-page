import { useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from 'framer-motion'
import teacher1 from '../assets/teacher1.png'
import teacher2 from '../assets/teacher2.png'
import teacher3 from '../assets/teacher3.png'

// Priklausomai nuo krypties, ateinama iš apačios ar tiesiogiai,
// parenkama puslapio transition animacija

let variants = {
    initial: (direction) => (direction === 'down' ? {y: '100vh'} : {opacity: 0}),
    animate: (direction) => (direction === 'down' ? {y: '0'} : {opacity: 1}),
    exit: { opacity: 0, y: '100vh' }
}

function Teachers() {
    const navigateRef = useRef()
    const navigate = useNavigate()
    const locationHook = useLocation()
    
    let direction
    if (locationHook.state) {
        direction = locationHook.state.scrollDirection
    }

        // Pasukus peles rateli nukreipiama į kita puslapį su useNavigate
        // ir perduodama informacija iš kurios krypties.
        // Panaudojau useRef, kad funcija būtų iškviečiama tik vieną kartą pasukus ratelį:

    const handleWheel = (e) => {
      if (e.deltaY < 0 && !navigateRef.current) {
        navigateRef.current = true
        navigate("/programs", { state: { scrollDirection: 'up' } })
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
            <img src={teacher1} alt="" />
            <img src={teacher2} alt="" />
            <img src={teacher3} alt="" />
        </div>
    </motion.div>
  )
}

export default Teachers