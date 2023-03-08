import React from 'react'

// Puslapio transition veikia pasukus ratelį tik ant Login komponento
// Funkcija jam perduota per props

function Login({ handleWheel }) {

  return (
    <div className="login--centering" >
        <div onWheel={(e) => handleWheel(e)} className="login--container">
            <svg style={{width: '34vw'}} width="718.675" viewBox="0 0 718.675 718.675">
                <g id="Login_bc" data-name="Login bc" transform="translate(-1080.663 -181.492)">
                    <rect id="Rectangle_10" filter="blur(10px)" data-name="Rectangle 10" width="660" height="660" rx="174.706" transform="translate(1110 210.83)" fill="#383838"/>
                    <rect id="Rectangle_10-2" data-name="Rectangle 10" width="660" height="660" rx="174.706" transform="translate(1110 210.83)" fill="#dbd9d9"/>
                    <rect id="Rectangle_10-3" filter="blur(10px)" data-name="Rectangle 10" width="623.617" height="623.617" rx="165.075" transform="translate(1128.192 229.021)" fill="#ebeaea"/>
                    <rect id="Rectangle_10-4" data-name="Rectangle 10" width="597.064" height="597.064" rx="158.046" transform="translate(1141.468 242.298)" fill="#ebeaea"/>
                </g>
            </svg>
            <div className="login--input">
                <div className='open-sans' style={{fontWeight: 'bold', fontSize: '3.5vw', marginRight: '10vw', marginBottom: '14vw'}} >
                    Login
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login