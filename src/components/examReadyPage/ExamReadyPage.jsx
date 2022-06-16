import React from 'react'
import './ExamReadyPage.css'
import {RulesData} from '../../Data/Data'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SideBar from '../navbar/SideBar'


const ExamReadyPage = () => {
  return (
        <div className="ExamContainers">
            <SideBar/>
            <div className="ExamReadyPage">
                <div className="middle">
                    <h1>Exam information</h1>
                    <div className="name">
                        <h3>Exam Name</h3>
                        <p>Exam TP 1</p>
                    </div>
                    <div className="name">
                        <h3>Module</h3>
                        <p>Administration Des Bases De Données</p>
                    </div>
                    <div className="desc">
                        <h3>Description</h3>
                        <p>Ce cours a pour objectif d’initier les étudiants à l’administration de base de données Oracle 12c. Les étudiants 
                          apprendront à installer, configurer et maintenir un SGBD. Ils seront sensibilisés aux enjeux de la disponibilité et 
                          de la sécurité de ceux-ci. Ils verront également quelles sont les tâches les plus fréquentes à réaliser dans le métier 
                          de DBA.</p>
                    </div>
                    <div className="rules">
                        <h3>Rules</h3>
                        {RulesData.map((rule) => {
                            return (
                                <div className="rule">
                                    <img src={rule.icon} alt="rule" />
                                    <p>{rule.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="right">
                    <div className="ExamSummary">
                        <h3><b>Exam Summary</b></h3>
                        <div className="elements">
                            <h4>Time</h4>
                            <div className="qst">
                                <p id="timeStart">10:30</p>
                                <p>-</p>
                                <p id="timeEnd">12:30</p>
                            </div>
                        </div>
                        <div className="elements">
                            <h4>Questions</h4>
                            <div className="qst">
                                <p className="question">60</p>
                                <p>Elements</p>
                            </div>
                        </div>
                        <div className="elements">
                            <h4>Average Time Per Qst</h4>
                            <div className="qst">
                                <p className="question">120</p>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <div className="year">
                            <h4>Year</h4>
                            <p className="question">4</p>
                        </div>
                        <div className="year">
                            <h4>Section</h4>
                            <p className="question">SIW</p>
                        </div>
                        <div className="year">
                            <h4>Group</h4>
                            <p className="question" id="group">1 2 3</p>
                        </div>
                    </div>
                    <div className="btn">
                        <p>Time Left To Start: <span>00:10:20</span></p>
                        <button><a href="/qcm">Start</a></button>
                    </div>
                    
                </div>
            </div>

        </div>


  )
}

export default ExamReadyPage