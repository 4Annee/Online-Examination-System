import React from 'react'
import Marks from '../marks/Marks'
import './RightSide.css'
import DOTS from '../../assets/dots.png'
import SearchBar from '../searchBar/SearchBar'


const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="search">
        <SearchBar/>
        <img src={DOTS} alt="dots" />
      </div>
      <div className="recentMarks">
        <h3>Recent Marks</h3>
        <Marks/>
      </div>
    </div>
  )
}

export default RightSide