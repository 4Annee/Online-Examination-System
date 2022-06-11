import React from 'react'
import './Main.css'
import Modules from '../Modules/Modules'
import Exams from '../Exams/Exams'
import DraftCalendar from '../Draft-Calendar/DraftCalendar'

const Main = () => {
  return (
    <div className="Main">
      <Modules />
      <Exams />
      <DraftCalendar />
    </div>
  )
}

export default Main