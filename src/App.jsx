import React from 'react'
import Navbar from './components/navbar/Navbar' 
import MainDash from './components/mainDash/MainDash'
import RightSide from './components/rightSide/RightSide'
import Exams from './pages/exams/Exams'
import Results from './pages/results/Results'
import Notifications from './pages/notifications/Notifications'
import Settings from './pages/settings/Settings'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainDash/>
              <RightSide/>
            </Route>
            <Route exact path="/exams">
              <Exams />
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;