import React from 'react'
import './Calendar.css'

import {ViewState, EditingState, IntegratedEditing} from '@devexpress/dx-react-scheduler'
import {Scheduler, WeekView, Appointments, AppointmentForm} from '@devexpress/dx-react-scheduler-material-ui'

const schedulerData = [
    {
        startDate: '2022-05-20T09:00',
        endDate: '2022-05-20T11:00',
        title: 'ABDD'
    },
    {
        startDate: '2022-05-21T09:00',
        endDate: '2022-05-21T11:00',
        title: 'Web'
    }
];

const CalendarExam = () => {
    
  return (
    <div className="calendar">
        <h3>Exams Calendar</h3>
        <Scheduler data={schedulerData}>
            <ViewState/>
            <EditingState/>
            <IntegratedEditing/>
            <WeekView startDayHour={8} endDayHour={16} cellDuration={60} excludedDays={[5,6]}/>
            <Appointments/>
            <AppointmentForm/>
        </Scheduler>
    </div>
  )
}

export default CalendarExam