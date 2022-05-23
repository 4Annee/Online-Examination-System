import React from 'react'
import CalendarExam from '../calendar/CalendarExam'
import Cards from '../cards/Cards'
import './MainDash.css'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <CalendarExam/>
    </div>
  )
}

export default MainDash;