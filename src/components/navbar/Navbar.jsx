import React, {useState} from 'react'
import './Navbar.css';
import '../../index.css'
import LOGO from '../../assets/logo-site.png'
import PROFILE from '../../assets/profile.png'
import {Link} from 'react-router-dom'

import { NavbarData } from '../../Data/Data';

const Navbar = () => {

  const [selected, setSelected] = useState(0)

  return (
    <div className="navbar">
    <nav>
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
      

      <div className="user-panel">
        <img src={PROFILE} alt="profile-pic" className="profile" />
        <h4>Username</h4>
        <h5>Student</h5>
        <button className="view-profile">View Profile</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;