import React from 'react'
import './Main.css'
import Modules from '../Modules/Modules'
import ExamsTeacher from '../Exams/ExamsTeacher'
import DraftCalendar from '../Draft-Calendar/DraftCalendar'

const Main = () => {
  return (
    <div className="Main">
      <Modules />
      <ExamsTeacher />
      <DraftCalendar />
    </div>
  )
}

export default Main