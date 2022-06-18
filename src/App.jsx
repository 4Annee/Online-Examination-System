import React from 'react'
import Form from './components-Form/Form'
import CodEditor from './components-editor/CodEditor';
import { Route, Routes } from "react-router-dom";
import Exam from './Component-exam/Exam';
import Create from './component-score/Create';
import Qcm from './Component-qcm/Qcm';
import Dashboard from './components/Dashboard/Dashboard'
import Exams from './pages/exams/Exams'
import Results from './pages/results/Results'
import Settings from './pages/settings/Settings'
import ExamReadyPage from './components/examReadyPage/ExamReadyPage'
import ExamPage from './components/ExamPage/ExamPage'
import ViewExams from './components_teacher/components/viewExams/ViewExams'
import ViewGroups from './components_teacher/components/viewGroups/ViewGroups'
import CreateExam from './components_teacher/components/createExam/CreateExam'
import DashboardTeacher from './components_teacher/components/Dashboard/DashboardTeacher'
import ResultsTeacher from './components_teacher/components/results/ResultsTeacher'
import Drafts from './components_teacher/components/drafts/Drafts'
import SettingsTeacher from './components_teacher/components/settings/SettingsTeacher'

function app() {
  return (
    <div>
    
     
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/code" element={<CodEditor/>} />
      <Route path='/exam' element={<Exam/>}/>
      <Route path='/qcm' element={<Qcm/>}/>
      <Route path='/score' element={<Create/>}/>
      <Route path="/student" element={<Dashboard />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/results" element={<Results />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/examReady" element={<ExamReadyPage/>} />
      <Route path="/startExam" element={<ExamPage />} />
      <Route path="/teacher" element={<DashboardTeacher />} />
      <Route path="/viewExams" element={<ViewExams />} />
      <Route path="/viewGroups" element={<ViewGroups/>} />
      <Route path="/createExam" element={<CreateExam/>} />
      <Route path="/resultsTeacher" element={<ResultsTeacher/>} />
      <Route path="/drafts" element={<Drafts />} />
      <Route path="/settingsTeacher" element={<SettingsTeacher/>} />
      
      
      
    </Routes>

     
    </div>
  )
}

export default app