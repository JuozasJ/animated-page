import { useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import backImg from '../assets/background.png'
import { motion } from 'framer-motion'
import Login from "./Login"

// Priklausomai nuo krypties, ateinama iš apačios ar tiesiogiai,
// parenkama puslapio transition animacija

let variants = {
    initial: (direction) => (direction === 'up' ? {y: '-100vh'} : {opacity: 0}),
    animate: (direction) => (direction === 'up' ? {y: '0'} : {opacity: 1}),
    exit: { opacity: 0, y: '-100vh' }
}

function Home() {
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
        navigate("/programs", { state: { scrollDirection: 'down' } })
      }
    }
        // Taip pat nukreipiama paspaudus mygtuką su šia funkcija:

    function navigateDown() {
        navigate("/programs", { state: { scrollDirection: 'down' } })
    }

  return (
    <motion.div
        style={{height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative'}}

        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.5 }}
        variants={variants}
        custom={direction}
    >
        <div style={{height: '100%', width: '100%' }}>
            <img style={{ minWidth: '118vw', height: '118vh', objectFit: 'cover', position: 'absolute'}} src={backImg} alt="Guy with backpack" />
        </div>
        <Login handleWheel={handleWheel} />
        <div className="down--container">
            <svg className="down--button" onClick={navigateDown} width="98.128" viewBox="0 0 98.128 74.884">
                <defs>
                    <clipPath id="clip-path">
                    <path id="Path_48" data-name="Path 48" d="M963,981.83h22.355A13.853,13.853,0,0,1,995,1005.649l-3.656,3.53-18.7,18.041a13.9,13.9,0,0,1-19.292,0l-18.7-18.041-3.656-3.53a13.853,13.853,0,0,1,9.646-23.819Z" transform="translate(-926.736 -981.83)" fill="none"/>
                    </clipPath>
                </defs>
                <g id="down" transform="translate(12.8 12.8)">
                    <path id="Path_45" data-name="Path 45" d="M963,981.83h22.355A13.853,13.853,0,0,1,995,1005.649l-3.656,3.53-18.7,18.041a13.9,13.9,0,0,1-19.292,0l-18.7-18.041-3.656-3.53a13.853,13.853,0,0,1,9.646-23.819Z" transform="translate(-926.736 -981.83)" fill="#383838"/>
                    <path id="Hover" d="M963,981.83h22.355A13.853,13.853,0,0,1,995,1005.649l-3.656,3.53-18.7,18.041a13.9,13.9,0,0,1-19.292,0l-18.7-18.041-3.656-3.53a13.853,13.853,0,0,1,9.646-23.819Z" transform="translate(-926.736 -981.83)" fill="#9311e9" opacity="0"/>
                    <path id="Path_46" data-name="Path 46" d="M963,981.83h22.355A13.853,13.853,0,0,1,995,1005.649l-3.656,3.53-18.7,18.041a13.9,13.9,0,0,1-19.292,0l-18.7-18.041-3.656-3.53a13.853,13.853,0,0,1,9.646-23.819Z" transform="translate(-926.736 -981.83)" fill="#7129ce"/>
                    <path id="Path_47" filter="blur(4px)" data-name="Path 47" d="M963,988.381h16.421a10.17,10.17,0,0,1,7.086,17.487l-2.687,2.59L970.086,1021.7a10.214,10.214,0,0,1-14.172,0l-13.735-13.244-2.687-2.59a10.17,10.17,0,0,1,7.086-17.487Z" transform="translate(-926.736 -981.83)" fill="#883aec"/>
                    <g id="hover-2" data-name="hover">
                    <g id="Group_140" data-name="Group 140" clip-path="url(#clip-path)">
                        <ellipse id="Ellipse_67" data-name="Ellipse 67" cx="143.07" cy="66.134" rx="143.07" ry="66.134" transform="translate(-106.806 -132.094)" fill="#da707e"/>
                        <ellipse id="Ellipse_68" data-name="Ellipse 68" cx="143.07" cy="66.134" rx="143.07" ry="66.134" transform="translate(-106.806 -142.977)" fill="#cd58ff"/>
                        <ellipse id="Ellipse_69" data-name="Ellipse 69" cx="143.07" cy="66.134" rx="143.07" ry="66.134" transform="translate(-106.806 -153.861)" fill="#2027f4"/>
                        <ellipse id="Ellipse_70" data-name="Ellipse 70" cx="143.07" cy="66.134" rx="143.07" ry="66.134" transform="translate(-106.806 -164.744)" fill="#4dacff"/>
                    </g>
                    </g>
                </g>
            </svg>
        </div>
            
    </motion.div>
  )
}

export default Home