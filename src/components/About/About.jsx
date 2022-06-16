import React from 'react'
import './About.css'
import EXAMEN from '../../assets/examen.png'
import TEAM from '../../assets/team.png'

const About = () => {
  return (
    <div className="About">
      <div class="about1">
            <img src={EXAMEN} />
            <h2>About ESI-Exam</h2>
            <p>
                ESIExam is founded by a team of developers, with the purpose of making the process of managing online examinations 
                easier. This plateform was made specifically to perform exams that involves writing Code.
                <br/>
                Code writing Exams, sometimes, when having more than one, are hard to manage. Students struggle with doing so without code editors.

                <br/>
                Thus, this website was an idea to facilitate managing with how you write your code easier.
                <br/>
            </p>
        </div>
        <div class="about2">
            <img src={TEAM} />
            <h2>Our team</h2>
            <p>
                A team that's creative, cooperative and innovation driven. A team that's seeking more improvement 
                day by day and its only purpose is to facilitate the educational life for all students.
            </p>
        </div>
    </div>
  )
}

export default About