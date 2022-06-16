import React from 'react'
import './General.css'
import SETTING from '../../assets/setting.png'

const General = () => {
  return (
    <div className="General">
      <div class="help">
          <div class="top">
            <img src={SETTING} />
            <h1>How can we help you?</h1>
          </div>
            <p class="mt-1">
              &nbsp;&nbsp;&nbsp; This section contains answers to most frequently asked questions in order to help you find the answer to yours.
            </p>
            <h4 class="mt-2"><i>What is ESIExam?</i></h4>
            <p class="mt-1">
              &nbsp;&nbsp;&nbsp; ESIExam is a professional website focused on managing students online exams.
              It's a website where students are able to perform their exams in a more efficient way.
            </p>
            <h4 class="mt-2"><i>How does it work?</i></h4>
            <p class="mt-1">
              &nbsp;&nbsp;&nbsp; ESIExam is an easy-to-browse plateform. In order to be a part of the
              community, you will receive your credentials from th.e administration After
              becoming an official member, you will be directed to your
              dashboard, where you will find on the left side of your page
              multiple items.
              <br/>
              &nbsp;&nbsp;&nbsp; In your <i>Dashboard</i>, you will be able to see the exam calendar beside your 
              recent marks, and the time left for your exam.
              <br/>
              &nbsp;&nbsp;&nbsp; In the <i>Exams</i> page, you will find your exams schedule, in addition to the previously passed exams
              and the necessary informations for the upcoming ones.
              <br/>
              &nbsp;&nbsp;&nbsp; When you want to start an exam, all you have to do is click the button start in <i>Exam information</i> page .
              <br/>
              &nbsp;&nbsp;&nbsp; You have the possibility of getting a general view on your results and others in the <i>Results</i> 
              page.
            </p>
        </div>
    </div>
  )
}

export default General