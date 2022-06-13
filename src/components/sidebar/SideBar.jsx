import React, {useState} from 'react'
import './SideBar.css'
import LOGO from '../../assets/logo-site.png'
import { NavbarData } from '../../Data/Data';

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>

        <div className="nav-items">
          <ul className="nav-links">
            {NavbarData.map((item, index) => {
              return (
                <li>
                  <a href={item.link} className={selected===index?'active': ''}
                  key={index}
                  onClick={() => setSelected(index)}
                  >
                    <img src={item.icon} alt="nav-item" />
                    <span className="nav-link-name">{item.heading}</span>
                  </a>
                </li>
              )
            })}
          </ul>
      </div>
    </div>
  )
}

export default SideBar