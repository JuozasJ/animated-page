import React from 'react'
import { motion } from 'framer-motion'

function AboutUs({ menuOpen }) {

   /*
    About Us komponentas kuris animuojasi priklausomai nuo menuOpen state.
    Animacijoms panaudojau Framer Motion bibioteką.
  */

  return (
    <motion.div className='about-us'
                initial={false}                           // Animacijos parametras keičiasi 
                animate={{ x: menuOpen ? '0' : '100%'}}   // priklausomai nuo menuOpen state.
                transition={{ duration: 0.3 }}
    >
      <div className='open-sans' style={{fontWeight: 'bold', fontSize: '3.5vw', marginTop: '11vw', marginLeft: '4vw'}} >
        About
      </div>
    </motion.div>
  )
}

export default AboutUs