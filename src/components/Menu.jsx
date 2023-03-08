import React from 'react'

function Menu({setMenuOpen, menuOpen}) {

  /*
    Meniu mygtukas kuris keicia menuOpen state ir pagal tai animuojasi About komponentas.
  */

  return (
    <button className='menu--button' onClick={() => setMenuOpen(!menuOpen)}>
        <svg width="100" viewBox="0 0 153.467 153.466">
        <defs>
            <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#392f45"/>
            <stop offset="0" stop-color="#7129ce"/>
            <stop offset="0.996" stop-color="#7129ce" stop-opacity="0.698"/>
            <stop offset="1" stop-color="#406648" stop-opacity="0.698"/>
            </linearGradient>
        </defs>
        <g id="Meniu" transform="translate(26.733 26.733)">
            <circle id="Hover" cx="50" cy="50" r="50" fill="#9311e9" opacity="0"/>
            <g id="Buton" transform="translate(-1770 -50)">
            <circle id="Ellipse_1" data-name="Ellipse 1" cx="50" cy="50" r="50" transform="translate(1770 50)" fill="#7129ce"/>
            <circle id="Ellipse_2" data-name="Ellipse 2" cx="37.766" cy="37.766" r="37.766" transform="translate(1782.234 62.234)" fill="#1a50e6"/>
            <circle id="Ellipse_3" data-name="Ellipse 3" cx="37.766" cy="37.766" r="37.766" transform="translate(1782.234 62.234)" fill="url(#linear-gradient)"/>
            </g>
            <g id="Meniu-2" data-name="Meniu" transform="translate(-1770 -50)">
            <path id="Path_1" data-name="Path 1" d="M1840,103.5h-40c-2.761,0-5-1.567-5-3.5h0c0-1.933,2.239-3.5,5-3.5h40c2.761,0,5,1.567,5,3.5h0C1845,101.933,1842.761,103.5,1840,103.5Z" fill="#f5edf3"/>
            <path id="Path_2" data-name="Path 2" d="M1840,89.5h-40c-2.761,0-5-1.567-5-3.5h0c0-1.933,2.239-3.5,5-3.5h40c2.761,0,5,1.567,5,3.5h0C1845,87.933,1842.761,89.5,1840,89.5Z" fill="#f5edf3"/>
            <path id="Path_3" data-name="Path 3" d="M1840,117.5h-40c-2.761,0-5-1.567-5-3.5h0c0-1.933,2.239-3.5,5-3.5h40c2.761,0,5,1.567,5,3.5h0C1845,115.933,1842.761,117.5,1840,117.5Z" fill="#f5edf3"/>
            </g>
        </g>
        </svg>
    </button>
  )
}

export default Menu