import React, {useState, useEffect} from 'react'
import './Exams.css'
import Clock from '../../components/clock/Clock'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ExamReadyPage from '../../components/examReadyPage/ExamReadyPage'
import TableExams from '../../components/tableExams/TableExams'
import PassedExams from '../../components/passedExams/PassedExams'

const Exams = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("June 04,2022 ").getTime();

    interval = setInterval(() => {
      const nowDate = new Date().getTime();
      const distance = countDownDate - nowDate;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        // Stop TimerDays
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    })
  }

  useEffect(() => {
    startTimer();
  });
  return (
    <Router>
      <div className="Exams">
        <Switch>
          <Route exact path="/examReady">
            <ExamReadyPage/>
          </Route>
        <div className="middle">
          <h1>Exams Section</h1>
          <div className="top">
            <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
            <div className="examDetails">
              <h3><i><b>Examen TP 1 - ABDD</b></i></h3>
              <div className="contenu">
                <p>Ce cours a pour objectif d???initier les ??tudiants ?? l???administration de base de donn??es Oracle 12c. Les ??tudiants 
                  apprendront ?? installer, configurer et maintenir un SGBD. Ils seront sensibilis??s aux enjeux de la disponibilit?? et 
                  de la s??curit?? de ceux-ci. Ils verront ??galement quelles sont les t??ches les plus fr??quentes ?? r??aliser dans le m??tier 
                  de DBA.</p>
                <Link to="/examReady">Read More</Link>
              </div>
            </div>
          </div>
          <div className="bottom">
            <TableExams />
            <PassedExams />
          </div>
        </div>
      <div className="right"></div>
      </Switch>
    </div>
    </Router>
  )
}

export default Exams 