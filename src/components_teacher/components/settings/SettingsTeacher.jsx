import React from 'react'
import './SettingsTeacher.css'
import SettingsTabs from './SettingsTabs'
import SideBarTeacher from '../sidebar/SideBarTeacher'

const SettingsTeacher = () => {
  return (
    <div className="settingsTeacherContainer">
      <SideBarTeacher />
    <div className="settingsTeacher">
      <h1>Settings</h1>
      <SettingsTabs />
    </div>
    </div>
  )
}

export default SettingsTeacher