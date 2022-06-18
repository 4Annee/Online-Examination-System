import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import General from '../General/General'
import About from '../About/About'

const SettingsTabs = () => {
  const [selectedTab, seTSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    seTSelectedTab(newValue);
  }

  return (
    <div className="tabs">
      <Box sx={{ width: '100%' }} position="static">
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="General"  />
        <Tab label="About us"  />
      </Tabs>
    </Box>
    {selectedTab === 0 && <General /> }
    {selectedTab === 1 && <About /> }
    </div>
  )
}

export default SettingsTabs