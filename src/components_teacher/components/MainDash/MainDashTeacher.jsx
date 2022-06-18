import React from 'react'
import Groups from '../Groups/Groups'
import Main from '../Main/Main'
import './MainDashTeacher.css'

const MainDashTeacher = () => {
  return (
      <div className="MainDashTeacher">
          <div>
            <h1>Welcome, Nadia</h1>
            <Groups />
            <Main />
          </div>
      </div>
  )
}

export default MainDashTeacher

