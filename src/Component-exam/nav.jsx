import React from 'react'
import LOGO from '../assets/logo-site.png'
function nav() {
  return (
    <div>
        <nav>
        <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      </nav>
    </div>
  )
}

export default nav