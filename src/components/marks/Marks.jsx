import React from 'react'
import './Marks.css'
import {MarksData} from '../../Data/Data'

const Marks = () => {
  return (
    <div className="marks">
        {MarksData.map((mark) => {
          return (
            <div className="mark">
              <div className="markValue">
                <img src={mark.dot} alt="dot" />
                <p>{mark.mark}</p>
              </div>
              <h3>{mark.title}</h3>
              <div className="moduleTime">
                <p>{mark.subject}</p>
              </div>
              <p id="date">{mark.date}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Marks