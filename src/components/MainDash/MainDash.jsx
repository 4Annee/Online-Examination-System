import React from 'react'
import Groups from '../Groups/Groups'
import Main from '../Main/Main'
import './MainDash.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ViewExams from '../viewExams/ViewExams'

const MainDash = () => {
  return (
    <Router>
      <div className="MainDash">
        <Switch>
          <Route exact path="/viewExams">
            <ViewExams/>
          </Route>
          <div>
            <h1>Welcome, Nadia</h1>
            <Groups />
            <Main />
          </div>
        </Switch>
      </div>
    </Router>
  )
}

export default MainDash

