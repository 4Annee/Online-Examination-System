import React from 'react'
import SideBar from './components/sidebar/SideBar'
import MainDash from './components/MainDash/MainDash'
import Results from './components/results/Results'
import Notifications from './components/notifications/Notifications'
import Settings from './components/settings/Settings'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ViewExams from './components/viewExams/ViewExams'
import CreateExam from './components/createExam/CreateExam'
import ViewGroups from './components/viewGroups/ViewGroups'
import ViewStudents from './components/viewStudents/ViewStudents'

const App = () => {
  return (
    <Router>
      <div className="App">
        <SideBar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainDash />
            </Route>
            <Route exact path="/viewExams">
              <ViewExams />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/notifications">
              <Notifications />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/createExam">
              <CreateExam />
            </Route>
            <Route exact path="/viewGroups">
              <ViewGroups />
            </Route>
            <Route exact path="/viewStudents">
              <ViewStudents />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App