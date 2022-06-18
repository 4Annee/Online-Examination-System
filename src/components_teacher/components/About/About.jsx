import React from 'react'
import './About.css'
import EXAMEN from '../../../assets/examen.png'
import TEAM from '../../../assets/team.png'

const About = () => {
  return (
    <div className="About">
      <div class="about1">
            <img src={EXAMEN} />
            <h2>About ESIBudgeting</h2>
            <p>
                ESIBudgeting is founded by a team of developers, with the purpose of making the process of dealing with money
                easier. This plateform was made specifically for those who need help with tracking their spendings and 
                savings.
                <br/>
                Bank accounts, sometimes, when having more than one, are hard to maintain and manage, transfering money with,
                is harder. Tracking how much money you have, how much did you spend this week, what is your balance, and more 
                operations that get complicated along the way.
                <br/>
                Thus, this website was an idea to facilitate managing with what you have, and with what you will have.
                <br/>
            </p>
        </div>
        <div class="about2">
            <img src={TEAM} />
            <h2>Our team</h2>
            <p>
                A team that's creative, cooperative and innovation driven. A team that's seeking more improvement 
                day by day and its only purpose is to facilitate the financial life for all users.
            </p>
        </div>
    </div>
  )
}

export default About