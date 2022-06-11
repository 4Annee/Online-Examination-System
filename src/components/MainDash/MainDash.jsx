import React from 'react'
import Groups from '../Groups/Groups'
import Main from '../Main/Main'
import './MainDash.css'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Welcome, Nadia</h1>
        <Groups />
        <Main />
    </div>
  )
}

export default MainDash

