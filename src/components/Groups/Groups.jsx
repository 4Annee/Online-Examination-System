import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import './Groups.css'

const Groups = () => {
  return (
    <div className="Groups">
      <div className="top">
        <h4>Groups</h4>
        <a href="/viewGroups">View all</a>
      </div>
      <div className="cards">
        <div className="card">
          <Avatar sx={{ bgcolor: deepOrange[100], width: 30, height: 30 }}><p>G1</p></Avatar>
          <p className="groupP">Group 1 - SIW</p>
        </div>
        <div className="card">
          <Avatar sx={{ bgcolor: deepOrange[100], width: 30, height: 30 }}><p>G2</p></Avatar>
          <p className="groupP">Group 2 - SIW</p>
        </div>
        <div className="card">
          <Avatar sx={{ bgcolor: deepOrange[100], width: 30, height: 30 }}><p>G3</p></Avatar>
          <p className="groupP">Group 3 - SIW</p>
        </div>
      </div>
    </div>
  )
}

export default Groups