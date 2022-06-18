import React from 'react'
import './DraftCalendar.css'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

const DraftCalendar = () => {
  return (
    <div className="DraftCalendar">
      <div className="calendar">
        <CalendarComponent></CalendarComponent>
      </div>
      <div className="drafts">
        <h4>My Drafts</h4>
      </div>
    </div>
  )
}

export default DraftCalendar