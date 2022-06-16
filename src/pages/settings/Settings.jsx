import React from 'react'
import SideBar from '../../components/navbar/SideBar'
import './Settings.css'
import SettingsTabs from './SettingsTabs'

const Settings = () => {
  return (
    <div className="sst">
      <SideBar/>
    <div className="settings">
      <h1>Settings</h1>
      <SettingsTabs />
    </div>
    </div>
  )
}

export default Settings