import React, {useState, useEffect} from 'react'
import './Cards.css'
import Clock from '../clock/Clock'
import CHAT from '../../assets/chat.png'

const Cards = () => {
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
    <div className="cards">
      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
      <div className="card">
        <h3>Chats</h3>
        <img src={CHAT} alt="chat" />
      </div>
      <div className="card">
        <h3>Chats</h3>
        <img src={CHAT} alt="chat" />
      </div>
      
    </div>
  )
}

export default Cards