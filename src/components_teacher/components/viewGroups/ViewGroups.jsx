import React, {useState} from 'react'
import './ViewGroups.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { blue, deepOrange } from '@mui/material/colors';
import STUDENT from '../../../assets/student.png'

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
}

const ViewGroups = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className="viewGroups">
        <h1>My Groups</h1>
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
              <LinkTab label="Groups" href="/viewGroups" />
              <LinkTab label="Students" href="/viewStudents" />
            </Tabs>
        </Box>
        <div className="groups">
            <a href="">
                <div className="group">
                  <div className="left">
                    <Avatar sx={{ bgcolor: blue[100], width: 30, height: 30 }}><p>G1</p></Avatar>
                    <p className="groupP">Group 1 - SIW</p>
                  </div>
                  <div className="right">
                    <AvatarGroup max={4}>
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                    </AvatarGroup>
                  </div>
                </div>
            </a>
            <a href="">
                <div className="group">
                  <div className="left">
                    <Avatar sx={{ bgcolor: blue[100], width: 30, height: 30 }}><p>G1</p></Avatar>
                    <p className="groupP">Group 2 - SIW</p>
                  </div>
                  <div className="right">
                    <AvatarGroup max={5}>
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                    </AvatarGroup>
                  </div>
                </div>
            </a>
            <a href="">
                <div className="group">
                  <div className="left">
                    <Avatar sx={{ bgcolor: blue[100], width: 30, height: 30 }}><p>G1</p></Avatar>
                    <p className="groupP">Group 3 - SIW</p>
                  </div>
                  <div className="right">
                    <AvatarGroup max={3}>
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                        <Avatar src={STUDENT} />
                    </AvatarGroup>
                  </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default ViewGroups