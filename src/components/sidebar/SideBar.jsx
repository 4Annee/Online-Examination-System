import React, {useState} from 'react'
import './SideBar.css'
import LOGO from '../../assets/logo-site.png'
import ARROW from '../../assets/left.png'

const SideBar = () => {

    const [inactive, setInactive] = useState(false);
  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
        <div className="top">
            <div className="logo">
                <img src={LOGO} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default SideBar