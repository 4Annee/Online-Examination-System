import React from 'react'
import SideBar from './components/sidebar/SideBar'
import MainDash from './components/MainDash/MainDash'

const App = () => {
  return (
      <div className="App">
          <SideBar/>
          <div className="content">
            <MainDash />
          </div>
      </div>
  )
}

export default App