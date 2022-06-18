import React, {useState} from 'react'
import './SideBarTeacher.css'
import LOGO from '../../../assets/logo-site.png'
import { NavbarData } from '../../../Data/DataTeacher';
import {Link} from 'react-router-dom'

const SideBarTeacher = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebarteacher">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>

        <div className="nav-items">
          <ul className="nav-links">
            {NavbarData.map((item, index) => {
              return (
                <li>
                  <Link to={item.link} className={selected===index?'active': ''}
                  key={index}
                  onClick={() => setSelected(index)}
                  >
                    <img src={item.icon} alt="nav-item" />
                    <span className="nav-link-name">{item.heading}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
      </div>
    </div>
  )
}

export default SideBarTeacher